import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const RejectedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Rejected cases" />
      <Filter state="rejected" />
      <Table />
      <Footer state="rejected" />
    </Wrapper>
  );
};

export default RejectedCases;
