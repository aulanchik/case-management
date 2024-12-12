import { FC } from "react";
import { Case } from "@/types";
import Selection from "./Selection";
import Priority from "./Priority";
import { Cell, Row } from "./styles";

const TableRow: FC<{ item: Case }> = ({ item }) => {
  return (
    <Row key={item.caseName}>
      <Selection item={item} />
      <Priority item={item} />
      <Cell>{item.caseName}</Cell>
      <Cell>{item.assignee}</Cell>
      <Cell>{item.status}</Cell>
      <Cell>{item.type}</Cell>
      <Cell>{item.dateCreated}</Cell>
      <Cell>{item.lastUpdated}</Cell>
    </Row>
  );
};

export default TableRow;
