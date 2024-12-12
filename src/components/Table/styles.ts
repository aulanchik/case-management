import styled from "styled-components";
import colors from "@/theme/colors";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 1px 3px 0 #00000026;
  border-radius: 8px;

  tr,
  th,
  td {
    padding: 12px;
  }
`;
const Header = styled.thead``;

const HeaderCell = styled.th`
  weight: 600;
  font-size: 0.75rem;
  line-height: 0.91rem;
  text-transform: uppercase;
  letter-spacing: 5%;
  text-align: left;
  color: #606f89;
  background-color: ${colors.blue3};
  cursor: pointer;
`;

const CellWrapper = styled.div`
  text-align: center;
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f4f7fd;
  }
`;

const Cell = styled.td`
  color: #2e3b52;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.06rem;
`;

const Actions = styled.div`
  margin-bottom: 1rem;

  button {
    margin-right: 1rem;
  }
`;

const Tag = styled.span<{ $state: string }>`
  color: ${colors.white};
  padding: 0.25rem 0.4rem;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 0.7rem;

  background-color: ${(props) => {
    if (props.$state === "High") {
      return colors.red;
    }
    if (props.$state === "Low") {
      return colors.blue1;
    }
    return "#4caf50";
  }};
`;

const TBody = styled.tbody``;

export {
  Table,
  Header,
  HeaderCell,
  CellWrapper,
  Row,
  Cell,
  Actions,
  Tag,
  TBody,
};
