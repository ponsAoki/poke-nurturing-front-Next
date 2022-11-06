import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { useFetchCertainPostData } from "../../hooks/useFetchCertainPostData";
import { DetailPostCard } from "../organisms/detailPostCard";

export const DetailPostPage: FC = (): JSX.Element => {
  const router = useRouter();
  const postId = router.query.postId as string | number;
  const postData = useFetchCertainPostData(postId);

  return (
    <Stack px={{ base: 8, md: 16 }} py={8} align="center">
      <DetailPostCard post={postData} />
    </Stack>
  );
};
