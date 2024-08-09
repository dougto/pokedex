import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-details-page',
  templateUrl: './pokemon-details-page.components.html',
  styleUrl: './pokemon-details-page.components.scss',
})
export class PokemonDetailsPageComponent {
  public pokemon: Pokemon | undefined;

  constructor(
    private pokemonService: PokemonService,
    private snackBar: MatSnackBar,
  ) {}

  @Input()
  set id(pokemonId: string) {
    this.pokemonService.fetchByNameOrId(pokemonId).then((pokemon) => {
      this.pokemon = pokemon;
    }).catch((error) => {
      this.snackBar.open(`fetch pokemon error: ${error.message}`, 'close');
    });
  }
}
