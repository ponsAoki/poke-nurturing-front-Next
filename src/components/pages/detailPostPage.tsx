import { Stack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { DetailPostCard } from "../organisms/detailPostCard";

export const DetailPostPage: FC = (): JSX.Element => {
  const [postData, setPostData] = useState();
  const router = useRouter();
  const postId = router.query.postId as string | number;
  useEffect(() => {
    if (!postId) return;
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${postId}`
      );
      setPostData(res.data);
    };
    fetchData();
  }, [router.query, postId]);
  return (
    <Stack px={16} py={8}>
      <DetailPostCard post={postData!} />
    </Stack>
  );
};
