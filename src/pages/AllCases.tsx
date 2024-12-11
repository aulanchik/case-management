import { FC } from "react";
import { Wrapper, Header, Filter, Table } from "@/components";

const AllCases: FC = () => {
  return (
    <Wrapper>
      <Header title="All cases" />
      <Filter />
      <Table />
    </Wrapper>
  );
};

export default AllCases;
