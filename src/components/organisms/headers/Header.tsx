import { Divider, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useRouting } from "../../../hooks/use-routing";
import { UserMenu } from "./UserMenu";

export type NavItem = {
  label: string;
  href: string;
  target: string;
};

export const Header: FC = (): JSX.Element => {
  const routing = useRouting();

  const navItems: NavItem[] = [
    {
      label: "投稿一覧",
      href: routing.home.path({}),
      target: "_self",
    },
    // {
    //   label: "あなたの投稿",
    //   href: "",
    //   target: "_self",
    // },
    {
      label: "育成論を投稿",
      href: routing.newPost.path({}),
      target: "_self",
    },
    // {
    //   label: "流行を知る",
    //   href: "",
    //   target: "_self",
    // },
  ];

  return (
    <>
      <HStack>
        <Flex px={{ base: 2, md: 4 }}>
          <UserMenu items={navItems} />
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
