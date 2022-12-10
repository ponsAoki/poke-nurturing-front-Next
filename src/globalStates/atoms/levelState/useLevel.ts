import { useSetRecoilState } from "recoil";
import { LevelState } from ".";

export const useLevel = () => {
  const setLevel = useSetRecoilState(LevelState);

  const changeLevel = (level: number) => {
    setLevel(level);
  };

  return changeLevel;
};
