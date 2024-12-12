import { FC } from "react";
import { Case } from "@/types";
import { Cell, Tag } from "./styles";

const Priority: FC<{ item: Case }> = ({ item }) => {
  if (!item.caseName) {
    return <td>&nbsp;</td>;
  }

  return (
    <Cell>
      <Tag $state={item.priority}>{item.priority}</Tag>
    </Cell>
  );
};

export default Priority;
