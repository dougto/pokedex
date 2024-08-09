# Pokédex by Douglas

This repository contains a Pokedex made by myself.

On the api level, [pokedex-promise-v2](https://github.com/PokeAPI/pokedex-promise-v2) library is used to fetch Pokemon data. This libary is useful because it wraps the pokeapi with typescript and a caching layer. So implementing cache was not needed.

On the app level, we have a list with all pokemons containing some basic data, and a details page with more data for each pokemon.

# Running the project

With both approaches the website will be available on `http://localhost:4200`.

## Without Docker

To run without docker, node JS 20 is needed.

To run the server, execute:
```sh
# change dir to api's folder
cd api

# install dependencies
npm install

# run the project
npm run start
```

While the api is running, run the app on a _different terminal session_, executing:
```sh
# change dir to app's folder
cd app

# install dependencies
npm install

# run the project
npm run start
```

## With Docker

With docker, simply run:
```sh
docker-compose up
```

# Running tests

Currently, only the api has tests. Execute the following commands:
```sh
# change dir to api's folder
cd api

# run tests
npm run test
```
