import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const AcceptedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Accepted cases" />
      <Filter />
      <Table />
      <Footer />
    </Wrapper>
  );
};

export default AcceptedCases;
