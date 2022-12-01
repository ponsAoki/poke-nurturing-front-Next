import { StatusValues } from "../../type/StatusValues";

export const calcHitPointRealValue = (
  statusValues: StatusValues,
  pokeName: string,
  level: number
): number => {
  if (pokeName === "ヌケニン") return 1;
  const HPRealValue =
    Math.floor(
      ((statusValues.baseStats[0] * 2 +
        statusValues.individualValues[0] +
        Math.floor(statusValues.effortValues[0] / 4)) *
        level) /
        100
    ) +
    level +
    10;

  return HPRealValue;
};
