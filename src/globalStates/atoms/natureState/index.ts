import { atom, RecoilState } from "recoil";
import { NATURES } from "../../../constants/natures";

export const initialState: any = NATURES[0];

export const NatureState: RecoilState<any> = atom({
  key: "natureState",
  default: initialState,
});
