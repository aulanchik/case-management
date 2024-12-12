import { FC } from "react";
import THeader from "./THeader";
import TableRows from "./TableRows";
import { ITable } from "@/interfaces";
import { Table, TBody } from "./styles";

const MainTable: FC<ITable> = ({ state }) => (
  <Table>
    <THeader status={state} />
    <TBody>
      <TableRows />
    </TBody>
  </Table>
);

export default MainTable;
