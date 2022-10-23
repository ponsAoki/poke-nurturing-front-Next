import { Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { UserMenu } from "./UserMenu";

export const Header: FC = (): JSX.Element => {
  return (
    <>
      <HStack>
        <Flex px={{ base: 2, md: 4 }}>
          <UserMenu />
        </Flex>
        <Flex>
          <Heading my={4}>
            <Text fontWeight="bold" fontSize={{ base: "21px", sm: "24px" }}>
              ぽミュニティ
            </Text>
          </Heading>
        </Flex>
      </HStack>
      <Divider></Divider>
    </>
  );
};
