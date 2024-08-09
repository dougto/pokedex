import { Component } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../pokemon.interface';

@Component({
  selector: 'pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrl: './pokemon-list-page.component.scss',
})
export class PokemonListPageComponent {
  public isLoadingList = false
  public isLoadingSearch = false
  public pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.fetchPokemonList();
  }

  public fetchPokemonList() {
    this.isLoadingList = true

    this.pokemonService.fetchList(this.pokemons.length).then((list) => {
      this.pokemons = [...this.pokemons, ...list];
      this.isLoadingList = false
    }).catch((error) => {
      // TODO: handle error better?
      console.log(error);
      this.isLoadingList = false
    });;
  }

  public onSearch(name: string) {
    this.isLoadingSearch = true

    if (!name) {
      this.pokemons = [];
      this.fetchPokemonList();
      this.isLoadingSearch = false
      return;
    }

    this.pokemonService.fetchByNameOrId(name).then((pokemon) => {
      if (pokemon) {
        this.pokemons = [pokemon];
      } else {
        this.pokemons = [];
      }
      this.isLoadingSearch = false
    }).catch((error) => {
      // TODO: handle error better?
      console.log(error);
      this.isLoadingSearch = false
    });
  }
}
