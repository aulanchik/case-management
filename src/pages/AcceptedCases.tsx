import { FC } from "react";
import { Wrapper, Header, Filter, Table } from "@/components";

const AcceptedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Accepted cases" />
      <Filter />
      <Table />
    </Wrapper>
  );
};

export default AcceptedCases;
