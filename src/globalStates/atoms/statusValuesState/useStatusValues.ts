import { useSetRecoilState } from "recoil";
import { StatusValuesState } from ".";

export const useStatusValues = () => {
  const setStatusValues = useSetRecoilState(StatusValuesState);

  const changeBaseStats = (pokemon: any): void => {
    const newBaseStats = Object.entries(pokemon.status).map((elm) =>
      Number(elm[1])
    );
    setStatusValues((prev) => ({ ...prev, baseStats: newBaseStats }));
  };

  const changeIndividualValues = (val: number, index: number): void => {
    setStatusValues((prev) => ({
      ...prev,
      individualValues: [...prev.individualValues].map((prevVal, i) =>
        index === i ? val : prevVal
      ),
    }));
  };

  const changeEffortValues = (val: number, index: number): void => {
    setStatusValues((prev) => ({
      ...prev,
      effortValues: [...prev.effortValues].map((prevVal, i) =>
        index === i ? val : prevVal
      ),
    }));
  };

  return { changeBaseStats, changeIndividualValues, changeEffortValues };
};
