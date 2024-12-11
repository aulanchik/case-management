import { FC } from "react";
import { thData } from "./data";
import { Checkbox } from "@/components";
import { Header, HeaderCell, Row } from "./styles";

const THeader: FC = () => (
  <Header>
    <Row>
      <HeaderCell>
        <Checkbox id="selectAll" name="selectAll" />
      </HeaderCell>
      {thData.map((headerItem) => (
        <HeaderCell key={headerItem}>{headerItem}</HeaderCell>
      ))}
    </Row>
  </Header>
);

export default THeader;
