import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const PendingCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Pending cases" />
      <Filter />
      <Table />
      <Footer />
    </Wrapper>
  );
};

export default PendingCases;
