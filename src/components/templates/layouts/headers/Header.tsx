import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { UserMenu } from "./UserMenu";

export const Header: FC = (): JSX.Element => {
  return (
    <HStack>
      <Flex>
        <UserMenu />
      </Flex>
      <Flex>
        <Heading>
          <Text fontWeight="bold" fontSize={{ base: "21px", sm: "24px" }}>
            ぽミュニティ
          </Text>
        </Heading>
      </Flex>
    </HStack>
  );
};
