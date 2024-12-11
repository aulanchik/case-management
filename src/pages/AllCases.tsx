import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const AllCases: FC = () => {
  return (
    <Wrapper>
      <Header title="All cases" />
      <Filter />
      <Table />
      <Footer />
    </Wrapper>
  );
};

export default AllCases;
