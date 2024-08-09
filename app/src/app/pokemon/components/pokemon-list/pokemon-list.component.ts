import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Input() isLoading = false;
  @Output() loadMore = new EventEmitter();

  public onClick() {
    this.loadMore.emit();
  }
}
