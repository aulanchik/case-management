import { FC } from "react";
import THeader from "./THeader";
import TableRows from "./TableRows";
import { Table, TBody } from "./styles";

const MainTable: FC = () => {
  return (
    <>
      <Table>
        <THeader />
        <TBody>
          <TableRows />
        </TBody>
      </Table>
    </>
  );
};

export default MainTable;
