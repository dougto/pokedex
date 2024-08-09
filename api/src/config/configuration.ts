export default () => ({
  fetchPokemonListLimit: parseInt(process.env.FETCH_POKEMON_LIST_LIMIT || '10'),
});
