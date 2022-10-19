import type { NextPage } from "next";
import { List } from "../components/pages/List";
import { Header } from "../components/templates/layouts/headers/Header";
// import "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <List />
    </>
  );
};

export default Home;
