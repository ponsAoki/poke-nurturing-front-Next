import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchPokemonCollection = () => {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    (async () => {
      const apiRes = await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search/poke`)
        .catch((err) => {
          throw new Error(err);
        });
      setPokeList(apiRes.data);
    })();
  }, []);

  return pokeList;
};
