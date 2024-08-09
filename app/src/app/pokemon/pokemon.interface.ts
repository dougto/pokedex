export type PokemonType = 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'stellar' | 'unknown';

export interface Pokemon {
  id: string;
  name: string;
  spriteUrl: string | null;
  height: number;
  weight: number;
  moves: Array<string>;
  abilities: Array<string>;
  types: Array<PokemonType>;
}
