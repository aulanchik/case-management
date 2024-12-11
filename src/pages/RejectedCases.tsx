import { FC } from "react";
import { Wrapper, Header, Filter } from "@/components";

const RejectedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Rejected cases" />
      <Filter />
    </Wrapper>
  );
};

export default RejectedCases;
