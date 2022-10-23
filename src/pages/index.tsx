import type { NextPage } from "next";
import { ListPage } from "../components/pages/listPage";
import { StandardPageLayout } from "../components/templates/layouts/standardPageLayout";

const Home: NextPage = () => {
  return (
    <StandardPageLayout>
      <ListPage />
    </StandardPageLayout>
  );
};

export default Home;
