import { Stack } from "@chakra-ui/react";
import { NewPostCard } from "../organisms/newPostCard";

export const NewPostPage = (): JSX.Element => {
  return (
    <Stack px={{ base: 8, md: 16 }} py={8} align="center">
      <NewPostCard />
    </Stack>
  );
};
