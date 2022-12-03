import { atom, RecoilState } from "recoil";
import { Pokemon } from "../../../type/Pokemon";

export const initialState: Pokemon = {};

export const PokemonState: RecoilState<Pokemon> = atom({
  key: "pokemonState",
  default: initialState,
});
