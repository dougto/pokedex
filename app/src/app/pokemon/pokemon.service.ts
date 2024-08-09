import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { Pokemon } from './pokemon.interface';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
  baseUrl = isDevMode() ? 'http://localhost:3000' : 'http://api:3000';

  constructor(private http: HttpClient) {
    console.log('running with API server:', this.baseUrl);
  }

  public fetchList(offset?: number): Promise<Array<Pokemon>> {
    return new Promise((resolve, reject) => {
      const query = offset ? `?offset=${offset}` : '';

      this.http.get<Array<Pokemon>>(this.baseUrl + '/api/pokemon' + query).subscribe({
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
      this.http.get<Pokemon>(this.baseUrl + '/api/pokemon/' + nameOrId).subscribe({
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
