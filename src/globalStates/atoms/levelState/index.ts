import { atom, RecoilState } from "recoil";

export const initialState: number = 50;

export const LevelState: RecoilState<number> = atom({
  key: "levelState",
  default: initialState,
});
