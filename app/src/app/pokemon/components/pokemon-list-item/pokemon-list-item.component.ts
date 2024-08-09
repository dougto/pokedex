import { Component, Input } from '@angular/core';
import { Pokemon } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrl: './pokemon-list-item.component.scss',
})
export class PokemonListItemComponent {
  @Input() pokemon: Pokemon | undefined;
}
