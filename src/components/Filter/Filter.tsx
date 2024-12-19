import { FC, useEffect } from "react";
import { IFilter } from "@/interfaces";
import useCaseStore from "@/store/useCaseStore";
import BatchAction from "./BatchAction";
import Search from "./Search";
import { Section } from "./styles";

const Filter: FC<IFilter> = ({ state }) => {
  const { fetchCases } = useCaseStore();

  useEffect(() => {
    fetchCases(state);
  }, [state, fetchCases]);

  return (
    <Section>
      <Search />
      <BatchAction state={state} />
    </Section>
  );
};

export default Filter;
