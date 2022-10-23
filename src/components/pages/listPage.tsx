import { VStack } from "@chakra-ui/react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { ListPostCard } from "../organisms/listPostCard";

export const ListPage: FC = (): JSX.Element => {
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
    <VStack py={8} px={{ base: 8, md: 12 }} spacing={4}>
      {posts.map((post: any) => (
        <ListPostCard key={post._id} post={post} />
      ))}
    </VStack>
  );
};
