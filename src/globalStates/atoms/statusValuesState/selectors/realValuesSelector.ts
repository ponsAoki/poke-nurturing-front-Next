import { selector } from "recoil";
import { StatusValuesState } from "..";
import { NATURES } from "../../../../constants/natures";
import { calcHitPointRealValue } from "../../../../lib/status/calcHitPointRealValue";
import { calcRealValueOtherThanHitPoint } from "../../../../lib/status/calcRealValueOtherThanHitPoint";

export const realValuesSelector = selector({
  key: "hitPointRealValueSelector",
  get: async ({ get }) => {
    const statusValues = get(StatusValuesState);
    const pokeName = "ヤドン";
    const level = 50;
    const nature = NATURES[1].n;
    //HPとそれ以外の能力の実数値の計算結果を配列に格納し、return
    const hitPointRealValue = calcHitPointRealValue(
      statusValues,
      pokeName,
      level
    );
    const realValueOtherThanHitPoint = [...Array(5)].map((_, i) =>
      calcRealValueOtherThanHitPoint(statusValues, i + 1, level, nature)
    );
    const realValues = [hitPointRealValue, ...realValueOtherThanHitPoint];

    return realValues;
  },
});
