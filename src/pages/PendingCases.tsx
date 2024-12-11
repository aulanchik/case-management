import { FC } from "react";
import { Wrapper, Header, Filter } from "@/components";

const PendingCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Pending cases" />
      <Filter />
    </Wrapper>
  );
};

export default PendingCases;
