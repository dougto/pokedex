import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Pokemon } from './pokemon.interface'

// TODO: use global config for URL
const baseUrl = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public fetchList(offset?: number): Promise<Array<Pokemon>> {
    return new Promise((resolve) => {
      const query = offset ? `?offset=${offset}` : '';

      this.http.get<Array<Pokemon>>(baseUrl + '/api/pokemon' + query).subscribe((pokemonList) => {
        resolve(pokemonList);
      });
    });
  }

  public fetchByNameOrId(nameOrId: string): Promise<Pokemon> {
    return new Promise((resolve) => {
      this.http.get<Pokemon>(baseUrl + '/api/pokemon/' + nameOrId).subscribe((pokemon) => {
        resolve(pokemon);
      });
    });
  }
}
