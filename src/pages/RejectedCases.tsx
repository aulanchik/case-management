import { FC } from "react";
import { Wrapper, Header, Filter, Table } from "@/components";

const RejectedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Rejected cases" />
      <Filter />
      <Table />
    </Wrapper>
  );
};

export default RejectedCases;
