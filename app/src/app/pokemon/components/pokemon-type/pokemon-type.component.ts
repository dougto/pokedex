import { Component, Input } from '@angular/core';
import { PokemonType } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrl: './pokemon-type.component.scss',
})
export class PokemonTypeComponent {
  @Input() type: PokemonType = 'unknown';

  // Credits to https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
  public colorTypeMap: Record<PokemonType, string> = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    stellar: '#FFFFFF',
    unknown: '#FFFFFF',
  };
}
