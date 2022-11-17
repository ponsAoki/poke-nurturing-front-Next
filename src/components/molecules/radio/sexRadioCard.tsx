import { Box, useRadio } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  children: any;
};

export const SexRadioCard = ({ register, children }: Props): JSX.Element => {
  const { getInputProps, getCheckboxProps } = useRadio(children);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} {...register("sex")} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        height={10}
        _checked={{
          bg: "gray.400",
          color: "gray.400",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
        color={children.color}
        bg={"gray.200"}
      >
        {children.value}
      </Box>
    </Box>
  );
};
