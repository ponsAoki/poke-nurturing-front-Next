import { atom } from "recoil";
import { STATUS_VALUES } from "../../../constants/status-values";
import { StatusValues } from "../../../type/StatusValues";

export const initialState: StatusValues = STATUS_VALUES;

export const StatusValuesState = atom({
  key: "statusValuesState",
  default: initialState,
});
