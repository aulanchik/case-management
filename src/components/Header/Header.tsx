import { FC } from "react";
import { IHeader } from "@/interfaces";
import { Head, Title } from "./styles";

const Header: FC<IHeader> = ({ title }) => {
  return (
    <Head>
      <Title>{title}</Title>
    </Head>
  );
};

export default Header;
