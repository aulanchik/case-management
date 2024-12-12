import { FC } from "react";
import { Wrapper, Header, Filter, Table, Footer } from "@/components";

const AcceptedCases: FC = () => {
  return (
    <Wrapper>
      <Header title="Accepted cases" />
      <Filter state="accepted" />
      <Table state="accepted" />
      <Footer state="accepted" />
    </Wrapper>
  );
};

export default AcceptedCases;
