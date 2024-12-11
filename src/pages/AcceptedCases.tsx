import { FC } from "react";
import { Wrapper, Header, Filter } from "@/components";

const AcceptedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Accepted cases" />
      <Filter />
    </Wrapper>
  );
};

export default AcceptedCases;
