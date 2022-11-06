import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FC } from "react";
import { useRouting } from "../../hooks/use-routing";

type Props = {
  post: any;
};

export const ListPostCard: FC<Props> = ({ post }) => {
  const routing = useRouting();
  return (
    <Box
      w="100%"
      paddingX={{ base: 4, md: 8 }}
      paddingY={{ base: 2, md: 4 }}
      borderWidth="1px"
      borderRadius={4}
      boxShadow="md"
      key={post.pokemon}
      as="a"
      href={routing.postDetail.path({ postId: post._id })}
    >
      <Heading fontSize={{ base: "md", md: "xl" }} fontWeight="500">
        {post.nn || post.title}
      </Heading>
      <Divider></Divider>
      <HStack
        mt={4}
        spacing={24}
        justify="stretch"
        fontSize={{ base: "sm", md: "md" }}
        alignContent="center"
      >
        <Wrap spacing={{ base: 4, md: "12", lg: "16", xl: "24" }}>
          <Image
            src={`${post.image}`}
            alt="ポケモンの画像です。"
            w={{ base: "120px", md: "150px" }}
            h={{ base: "120px", md: "150px" }}
          />
          <WrapItem alignItems="center">
            <VStack alignItems="start">
              {post.moves.map((move: string, i: number) => (
                <Box
                  key="move"
                  w={{ base: "140px", md: "200px" }}
                  borderWidth="1px"
                  borderRadius={4}
                  textAlign="center"
                >
                  {move}
                </Box>
              ))}
            </VStack>
          </WrapItem>
          <WrapItem alignItems="center">
            <VStack alignItems="start">
              <Box>特性: {post.ability}</Box>
              <Box>性格: {post.nature}</Box>
              <Box>持ち物: {post.item}</Box>
            </VStack>
          </WrapItem>
          <WrapItem alignItems="center">
            <VStack alignItems="start">
              <Box>
                <HStack>
                  <Box>努力値:</Box>
                  {post.en.map((enElm: number, i: number) => (
                    <>
                      {i != 0 && <Box> - </Box>}
                      <Box>{enElm}</Box>
                    </>
                  ))}
                </HStack>
              </Box>
              <Box>
                <HStack>
                  <Box>個体値:</Box>
                  {post.IN.map((INElm: number, i: number) => (
                    <>
                      {i != 0 && <Box> - </Box>}
                      <Box>{INElm}</Box>
                    </>
                  ))}
                </HStack>
              </Box>
              <Box>
                <HStack>
                  <Box>実数値:</Box>
                  {post.rn.map((rnElm: number, i: number) => (
                    <>
                      {i != 0 && <Box> - </Box>}
                      <Box>{rnElm}</Box>
                    </>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </WrapItem>
        </Wrap>
      </HStack>
    </Box>
  );
};
