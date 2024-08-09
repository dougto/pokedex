import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';
import Pokedex from 'pokedex-promise-v2';
import { Pokemon } from './pokemon.interface';

@Injectable()
export class PokemonService {
  private pokedex: Pokedex = {} as Pokedex;

  constructor(private configService: ConfigService) {
    const initPokedex = async () => {
      // Since this module is a ESM module, we need to dinamically import it
      const dynamicPokedex = await import('pokedex-promise-v2');

      this.pokedex = new dynamicPokedex.default();
    };

    initPokedex();
  }

  private parsePokedexPokemonToPokemon(pokedexPokemon: Pokedex.Pokemon): Pokemon {
    const { height, abilities, id, moves, name, sprites, types, weight } = pokedexPokemon;

    const abilitiesNames = abilities.map((ability) => ability.ability.name);
    const movesNames = moves.map((move) => move.move.name);
    const typesNames = types.map((type) => type.type.name);

    return {
      abilities: abilitiesNames,
      moves: movesNames,
      id: `${id}`,
      spriteUrl: sprites.front_default,
      types: typesNames,
      height,
      weight,
      name,
    };
  }

  public async findAll(offset?: number): Promise<Array<Pokemon>> {
    const limit = this.configService.get<number>('fetchPokemonListLimit');
    const pokemonsListResult = await this.pokedex.getPokemonsList({offset, limit });

    const names = pokemonsListResult.results.map((result) => result.name);

    const pokemons: Array<Pokemon> = await Promise.all(names.map(async (pokemonName) => {
      const pokedexPokemon = await this.pokedex.getPokemonByName(pokemonName);

      return this.parsePokedexPokemonToPokemon(pokedexPokemon);
    }));

    return pokemons;
  }

  public async findOne(pokemonNameOrId: string): Promise<Pokemon | null> {
    try {
      const pokedexPokemon = await this.pokedex.getPokemonByName(pokemonNameOrId);

      return this.parsePokedexPokemonToPokemon(pokedexPokemon);
    } catch (error) {
      if ((error as any).response.status === 404) {
        return null;
      }

      throw error;
    }
  }
}
