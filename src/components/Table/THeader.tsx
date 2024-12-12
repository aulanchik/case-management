import { FC } from "react";
import { thData } from "./data";
import { Checkbox } from "@/components";
import useCaseStore from "@/store/useCaseStore";
import { Header, HeaderCell, CellWrapper, Row } from "./styles";

const THeader: FC = () => {
  const { setSort } = useCaseStore();

  return (
    <Header>
      <Row>
        <HeaderCell>
          <CellWrapper>
            <Checkbox id="selectAll" name="selectAll" />
          </CellWrapper>
        </HeaderCell>
        {thData.map((headerItem) => (
          <HeaderCell
            key={headerItem}
            onClick={() => setSort(headerItem.toLowerCase())}
          >
            {headerItem}
          </HeaderCell>
        ))}
      </Row>
    </Header>
  );
};

export default THeader;
