import { useSetRecoilState } from "recoil";
import { NatureState } from ".";
import { NATURES } from "../../../constants/natures";

export const useNature = () => {
  const setNature = useSetRecoilState(NatureState);

  const changeNature = (natureName: string) => {
    const applicableNature = NATURES.find(
      (nature) => nature.name === natureName
    );
    setNature(applicableNature);
  };

  return changeNature;
};
