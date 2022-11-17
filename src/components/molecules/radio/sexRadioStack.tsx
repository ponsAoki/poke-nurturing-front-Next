import { HStack, useRadioGroup } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { SEX } from "../../../constants/sex";
import { SexRadioCard } from "./sexRadioCard";

type Props = {
  register: UseFormRegister<FieldValues>;
};

export const SexRadioStack = ({ register }: Props): JSX.Element => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "sex",
    defaultValue: { value: "なし", color: "white" } as any,
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} spacing={1}>
      {SEX.map((sex) => {
        const radio = getRadioProps({ sex });
        return (
          <SexRadioCard key={sex.value} {...radio} register={register}>
            {sex}
          </SexRadioCard>
        );
      })}
    </HStack>
  );
};
