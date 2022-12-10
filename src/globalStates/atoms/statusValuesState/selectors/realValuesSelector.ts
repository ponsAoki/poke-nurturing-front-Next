import { selector } from "recoil";
import { StatusValuesState } from "..";
import { calcHitPointRealValue } from "../../../../lib/status/calcHitPointRealValue";
import { calcRealValueOtherThanHitPoint } from "../../../../lib/status/calcRealValueOtherThanHitPoint";
import { LevelState } from "../../levelState";
import { NatureState } from "../../natureState";
import { PokemonState } from "../../pokemonState";

export const realValuesSelector = selector({
  key: "hitPointRealValueSelector",
  get: async ({ get }) => {
    const statusValues = get(StatusValuesState);
    //ポケモンstateのポケモン名を取得
    const pokeName = get(PokemonState).name;
    //レベルstateを取得
    const level = get(LevelState);
    //性格stateの補正値配列を取得
    const nature = get(NatureState).n;
    //HPとそれ以外の能力の実数値の計算結果を配列に格納し、return
    const hitPointRealValue = calcHitPointRealValue(
      statusValues,
      pokeName,
      level
    );
    const realValuesOtherThanHitPoint = [...Array(5)].map((_, i) =>
      calcRealValueOtherThanHitPoint(statusValues, i + 1, level, nature)
    );
    const realValues = [hitPointRealValue, ...realValuesOtherThanHitPoint];

    return realValues;
  },
});
