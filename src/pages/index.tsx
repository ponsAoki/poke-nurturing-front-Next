import type { NextPage } from "next";
import { ListPage } from "../components/pages/listPage";
import { StandardPageLayout } from "../components/templates/layouts/standardPageLayout";
import { getAllPosts } from "../lib/getAllPosts";

type Props = {
  postData: any;
};

const Home: NextPage<Props> = ({ postData }) => {
  return (
    <StandardPageLayout>
      <ListPage postData={postData} />
    </StandardPageLayout>
  );
};

export const getStaticProps = async () => {
  const postData = await getAllPosts();

  return {
    props: {
      postData,
    },
  };
};

export default Home;
