import { FC } from "react";
import { Wrapper, Header, Filter, Table } from "@/components";

const PendingCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Pending cases" />
      <Filter />
      <Table />
    </Wrapper>
  );
};

export default PendingCases;
