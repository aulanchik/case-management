import { FC } from "react";
import { Sidebar } from "@/components";
import { IWrapper } from "@/interfaces";
import { Wrap, Main } from "./styles";

const Wrapper: FC<IWrapper> = (props) => {
  return (
    <Wrap>
      <Sidebar />
      <Main>{props.children}</Main>
    </Wrap>
  );
};

export default Wrapper;
