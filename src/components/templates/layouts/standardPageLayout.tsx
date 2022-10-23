import { FC, ReactNode } from "react";
import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/headers/Header";

type Props = {
  children: ReactNode;
};

export const StandardPageLayout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
