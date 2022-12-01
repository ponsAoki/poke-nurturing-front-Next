import { atom, RecoilState } from "recoil";
import { STATUS_VALUES } from "../../../constants/status-values";
import { StatusValues } from "../../../type/StatusValues";

export const initialState: StatusValues = STATUS_VALUES;

export const StatusValuesState: RecoilState<StatusValues> = atom({
  key: "statusValuesState",
  default: initialState,
});
