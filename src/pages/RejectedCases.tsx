import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const RejectedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Rejected cases" />
      <Filter />
      <Table />
      <Footer />
    </Wrapper>
  );
};

export default RejectedCases;
