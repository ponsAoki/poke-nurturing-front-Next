import axios from "axios";
import { selector } from "recoil";
import { PokemonState } from "../../pokemonState";

export const pokeImageSelector = selector({
  key: "pokeImageSelector",
  get: async ({ get }) => {
    const pokemonState = get(PokemonState);
    console.log(pokemonState);

    const pokeApiFirstRes = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${String(pokemonState.no)}`)
      .catch((error) => {
        throw new Error(error);
      });
    console.log(pokeApiFirstRes);
    return pokeApiFirstRes;
  },
});
