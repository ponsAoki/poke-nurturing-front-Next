import { HStack, useRadioGroup } from "@chakra-ui/react";
import { SEX } from "../../../constants/sex";
import { SexRadioCard } from "./sexRadioCard";

export const SexRadioStack = (): JSX.Element => {
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
          <SexRadioCard key={sex} {...radio}>
            {sex}
          </SexRadioCard>
        );
      })}
    </HStack>
  );
};
