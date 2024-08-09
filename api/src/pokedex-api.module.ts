import { Module, MiddlewareConsumer } from '@nestjs/common';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokedexApiModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware);
  }
}
