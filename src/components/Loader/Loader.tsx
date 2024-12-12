import { FC } from "react";
import { ILoader } from "@/interfaces";
import { Spinner } from "./styles";

const Loader: FC<ILoader> = ({ active }) => {
  return <Spinner $active={active} />;
};

export default Loader;
