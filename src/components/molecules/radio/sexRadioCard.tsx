import { Box, useRadio } from "@chakra-ui/react";

export const SexRadioCard = (props: any): JSX.Element => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  console.log(props.children);

  return (
    <Box as="label">
      <input {...input} />
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
        color={props.children.color}
        bg={"gray.200"}
      >
        {props.children.value}
      </Box>
    </Box>
  );
};
