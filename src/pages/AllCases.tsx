import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const AllCases: FC = () => {
  return (
    <Wrapper>
      <Header title="All cases" />
      <Filter state="" />
      <Table />
      <Footer state="" />
    </Wrapper>
  );
};

export default AllCases;
