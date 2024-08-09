import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { AuthMiddleware } from './middlewares/auth.middleware';
import config from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    load: [config],
  })],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokedexApiModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware);
  }
}
