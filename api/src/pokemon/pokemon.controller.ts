import { Controller, Get, Query, Param, HttpException, HttpStatus } from "@nestjs/common";
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.interface';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  public findAll(
    @Query('offset') offset: number,
  ): Promise<Array<Pokemon>> {
    if (offset < 0) {
      throw new HttpException('invalid offset', HttpStatus.BAD_REQUEST);
    }

    return this.pokemonService.findAll(offset);
  }

  @Get(':idOrName')
  public findOne(@Param('idOrName') idOrName: string): Promise<Pokemon | null> {
    if (!idOrName) {
      throw new HttpException('name or id not provided', HttpStatus.BAD_REQUEST);
    }

    return this.pokemonService.findOne(idOrName);
  }
}
