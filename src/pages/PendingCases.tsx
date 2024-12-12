import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const PendingCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Pending cases" />
      <Filter state="in progress" />
      <Table />
      <Footer state="in progress" />
    </Wrapper>
  );
};

export default PendingCases;
