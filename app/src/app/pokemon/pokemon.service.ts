import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon.interface';

const baseUrl = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public fetchList(offset?: number): Promise<Array<Pokemon>> {
    return new Promise((resolve, reject) => {
      const query = offset ? `?offset=${offset}` : '';

      this.http.get<Array<Pokemon>>(baseUrl + '/api/pokemon' + query).subscribe({
        next: (pokemonList) => {
          resolve(pokemonList);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  public fetchByNameOrId(nameOrId: string): Promise<Pokemon> {
    return new Promise((resolve, reject) => {
      this.http.get<Pokemon>(baseUrl + '/api/pokemon/' + nameOrId).subscribe({
        next: (pokemon) => {
          resolve(pokemon);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
