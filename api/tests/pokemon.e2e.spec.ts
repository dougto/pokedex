import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PokedexApiModule } from '../src/pokedex-api.module';
import { PokemonService } from '../src/pokemon/pokemon.service';
import pokemonList from './pokemon-list.json';

describe('PokedexApi', () => {
  let app: INestApplication;
  // PokemonService mock
  let pokemonService: PokemonService = {
    findAll: () => Promise.resolve(pokemonList),
    findOne: (pokemonNameOrId: string) => new Promise((resolve) => {
      const [pokemonRes] = pokemonList.filter((pokemon) => [pokemon.name, pokemon.id].includes(pokemonNameOrId));
      resolve(pokemonRes);
    }),
  } as PokemonService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PokedexApiModule],
    })
      .overrideProvider(PokemonService)
      .useValue(pokemonService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  describe('/GET pokemon list', () => {
    it('should return expected list', async () => {
      const expectedData = await pokemonService.findAll();

      const response = await request(app.getHttpServer())
        .get('/pokemon')
        .expect(200);

      const pokemonResultNames = response.body.map((pokemon) => pokemon.name).sort();
      const expectedNames = expectedData.map((pokemon) => pokemon.name).sort();

      expect(response.body.length).toBe(expectedData.length);
      expect(pokemonResultNames).toEqual(expectedNames);
    });

    it('should not accept invalid offset', async () => {
      const response = await request(app.getHttpServer())
        .get('/pokemon?offset=error')
        .expect(400);

      expect(response.body.message).toBe("invalid offset");
    });
  });

  describe('/GET pokemon by id or name', () => {
    it('should return expected pokemon', async () => {
      const response = await request(app.getHttpServer())
        .get('/pokemon/1')
        .expect(200);

      expect(response.body.name).toBe('bulbasaur');
      expect(response.body.id).toBe('1');
    });

    it('should return empty object when pokemon is not found', async () => {
      const response = await request(app.getHttpServer())
        .get('/pokemon/11111')
        .expect(200);

      expect(response.body).toEqual({});
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
