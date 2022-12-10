import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useLevel } from "../../../globalStates/atoms/levelState/useLevel";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const LevelInput = ({ register }: Props): JSX.Element => {
  const changeLevel = useLevel();

  return (
    <NumberInput
      defaultValue={50}
      min={1}
      max={100}
      placeholder="Lv."
      {...register("lv")}
      onChange={(val) => changeLevel(Number(val))}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
