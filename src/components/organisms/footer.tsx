import { Center, Divider, VStack } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <>
      <Divider></Divider>
      <VStack>
        <Center my={4}>Copyright ©︎ 2022 ponsAoki</Center>
      </VStack>
    </>
  );
};
