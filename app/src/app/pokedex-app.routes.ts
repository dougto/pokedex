import { Routes } from '@angular/router';
import { PokemonListPageComponent } from './pokemon/pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonDetailsPageComponent } from './pokemon/pages/pokemon-details-page/pokemon-details-page.components';
import { PageNotFoundComponent } from './pokemon/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListPageComponent,
  },
  {
    path: 'details/:id',
    component: PokemonDetailsPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
