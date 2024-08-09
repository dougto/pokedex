export interface Pokemon {
  id: string;
  name: string;
  spriteUrl: string | null;
  height: number;
  weight: number;
  moves: Array<string>;
  abilities: Array<string>;
  types: Array<string>;
}
