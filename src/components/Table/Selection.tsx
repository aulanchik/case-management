import { FC } from "react";
import { Case } from "@/types";
import { Checkbox } from "@/components";
import useCaseStore from "@/store/useCaseStore";
import { Cell } from "./styles";

const Selection: FC<{ item: Case }> = ({ item }) => {
  const { selectedCases, toggleCaseSelection } = useCaseStore();

  if (!item.caseName) {
    return <td>&nbsp;</td>;
  }

  return (
    <Cell>
      <div style={{ textAlign: "center" }}>
        <Checkbox
          id={item.caseName}
          name={item.caseName}
          checked={selectedCases.includes(item.caseName)}
          onChange={() => toggleCaseSelection(item.caseName)}
        />
      </div>
    </Cell>
  );
};

export default Selection;
