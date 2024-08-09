import { Controller, Get, Query, Param } from "@nestjs/common";
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.interface';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  public async findAll(
    @Query('offset') offset: number,
  ): Promise<Array<Pokemon>> {
    return this.pokemonService.findAll(offset);
  };

  @Get(':idOrName')
  findOne(@Param('idOrName') idOrName: string): Promise<Pokemon | null> {
    return this.pokemonService.findOne(idOrName)
  }
}
