import { Image } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { pokeImageSelector } from "../../../globalStates/atoms/imageState/selectors/pokeImageSelector";

export const PokeImage = () => {
  const imageState = useRecoilValue(pokeImageSelector);
  console.log(imageState);

  return (
    <Image
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/199.png"
      alt="ポケモンの画像"
      boxSize={48}
    />
  );
};
