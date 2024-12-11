import { FC } from "react";
import { Wrapper, Header, Filter } from "@/components";

const AllCases: FC = () => {
  return (
    <Wrapper>
      <Header title="All cases" />
      <Filter />
    </Wrapper>
  );
};

export default AllCases;
