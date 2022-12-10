import { StatusValues } from "../../type/StatusValues";

export const calcRealValueOtherThanHitPoint = (
  statusValues: StatusValues,
  valIndex: number,
  level: number,
  natureCorrectArr: number[]
): number => {
  const natureCorrectVal = natureCorrectArr[valIndex];
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
