import { FC } from "react";
import TableRow from "./TableRow";
import { caseItem } from "./data";
import useCaseStore from "@/store/useCaseStore";

const TableRows: FC = () => {
  const { cases } = useCaseStore();

  const renderRows = () => {
    if (cases.length === 0) {
      return Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index} item={caseItem} />
      ));
    }
    return cases.map((item) => <TableRow key={item.caseName} item={item} />);
  };

  return renderRows();
};

export default TableRows;
