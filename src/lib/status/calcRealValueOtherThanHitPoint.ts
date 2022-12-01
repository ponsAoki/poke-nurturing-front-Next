import { StatusValues } from "../../type/StatusValues";

export const calcRealValueOtherThanHitPoint = (
  statusValues: StatusValues,
  valIndex: number,
  level: number,
  nature?: number[]
): number => {
  const natureCorrectVal = nature ? nature[valIndex] : 1;
  const realValueOtherThanHitPoint = Math.floor(
    (Math.floor(
      ((statusValues.baseStats[valIndex] * 2 +
        statusValues.individualValues[valIndex] +
        Math.floor(statusValues.effortValues[valIndex] / 4)) *
        level) /
        100
    ) +
      5) *
      natureCorrectVal
  );
  return realValueOtherThanHitPoint;
};
