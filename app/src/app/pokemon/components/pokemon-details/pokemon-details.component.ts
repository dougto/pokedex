import { Component, Input } from '@angular/core';
import { Pokemon } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  @Input() pokemon: Pokemon | undefined;
}
