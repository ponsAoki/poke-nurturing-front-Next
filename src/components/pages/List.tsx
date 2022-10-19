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
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";

export const List: FC = (): JSX.Element => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const options: AxiosRequestConfig = {
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/post`,
      method: "GET",
    };
    axios(options)
      .then((res: AxiosResponse<any[]>) => {
        const { data, status } = res;
        setPosts(data as any);
      })
      .catch((err: AxiosError<{ error: string }>) => {
        throw new Error("エラー");
      });
  }, []);

  return (
    <VStack>
      {posts.map((post: any) => (
        <Box
          key={post.pokemon}
          w="80%"
          padding={{ base: 2, md: 4 }}
          borderWidth="1px"
          borderRadius={4}
          boxShadow="md"
        >
          <Heading fontSize={{ base: "md", xl: "xl" }} fontWeight="500">
            {post.nn || post.title}
          </Heading>
          <Divider></Divider>
          <HStack mt={4} spacing={8}>
            <Wrap spacing={{ base: 4, md: 8 }}>
              <Image
                src={`${post.image}`}
                alt="ポケモンの画像です。"
                w={{ base: "100px", md: "150px" }}
                h={{ base: "100px", md: "150px" }}
              />
              <WrapItem>
                <VStack alignItems="start">
                  {post.moves.map((move: string, i: number) => (
                    <Box
                      key="move"
                      w="full"
                      borderWidth="1px"
                      borderRadius={4}
                      textAlign="center"
                    >
                      {move}
                    </Box>
                  ))}
                </VStack>
              </WrapItem>
              <WrapItem>
                <VStack alignItems="start">
                  <Box>特性: {post.ability}</Box>
                  <Box>性格: {post.nature}</Box>
                  <Box>持ち物: {post.item}</Box>
                </VStack>
              </WrapItem>
              <WrapItem>
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
      ))}
    </VStack>
  );
};
