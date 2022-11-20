import { VStack } from "@chakra-ui/react";
import { ListPostCard } from "../organisms/listPostCard";

type Props = {
  postData: any;
};

export const ListPage = ({ postData }: Props): JSX.Element => {
  return (
    <VStack py={8} px={{ base: 8, md: 12 }} spacing={4}>
      {postData.map((post: any) => (
        <ListPostCard key={post._id} post={post} />
      ))}
    </VStack>
  );
};
