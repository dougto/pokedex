import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from "./pokedex-app.component";
import { PokemonListPageComponent } from './pokemon/pages/pokemon-list-page/pokemon-list-page.component';
import { PokemonDetailsPageComponent } from './pokemon/pages/pokemon-details-page/pokemon-details-page.components';

import { PokemonListComponent } from './pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon/components/pokemon-list-item/pokemon-list-item.component';
import { PokedexIconComponent } from './pokemon/components/pokedex-icon/pokedex-icon.component';
import { SearchInputComponent } from './pokemon/components/search-input/search-input.components';
import { PokemonTypeComponent } from './pokemon/components/pokemon-type/pokemon-type.component';
import { PokemonDetailsComponent } from './pokemon/components/pokemon-details/pokemon-details.component';
import { PokemonService } from "./pokemon/pokemon.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatProgressSpinner,
    MatButtonModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    PokemonService,
    provideHttpClient(
      withFetch(),
    ),
    provideAnimationsAsync(),
    provideRouter(routes, withComponentInputBinding()),
  ],
  declarations: [
    PokedexAppComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokedexIconComponent,
    SearchInputComponent,
    PokemonTypeComponent,
    PokemonDetailsComponent,
    PokemonListPageComponent,
    PokemonDetailsPageComponent,
  ],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
