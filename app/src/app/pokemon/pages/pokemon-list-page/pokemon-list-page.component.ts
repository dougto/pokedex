import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrl: './pokemon-list-page.component.scss',
})
export class PokemonListPageComponent {
  public isLoadingList = false;
  public isLoadingSearch = false;
  public pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    private snackBar: MatSnackBar,
  ) {
    this.fetchPokemonList();
  }

  public fetchPokemonList() {
    this.isLoadingList = true;

    this.pokemonService.fetchList(this.pokemons.length).then((list) => {
      this.pokemons = [...this.pokemons, ...list];
      this.isLoadingList = false;
    }).catch((error) => {
      this.snackBar.open(`fetch pokemon list error: ${error.message}`, 'close');
      this.isLoadingList = false;
    });;
  }

  public onSearch(name: string) {
    this.isLoadingSearch = true;

    if (!name) {
      this.pokemons = [];
      this.fetchPokemonList();
      this.isLoadingSearch = false;
      return;
    }

    this.pokemonService.fetchByNameOrId(name).then((pokemon) => {
      if (pokemon) {
        this.pokemons = [pokemon];
      } else {
        this.pokemons = [];
      }
      this.isLoadingSearch = false;
    }).catch((error) => {
      this.snackBar.open(`fetch pokemon error: ${error.message}`, 'close');
      this.isLoadingSearch = false;
    });
  }
}
