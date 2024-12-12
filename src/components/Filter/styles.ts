import styled from "styled-components";
import colors from "@/theme/colors";

const Section = styled.section`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-shadow: 1px solid ${colors.grey1};
`;

const Input = styled.input`
  padding: 0.5rem 4.688rem 0.5rem 0.5rem;
  border: 1px solid ${colors.grey};
  border-radius: 0.375rem;
  font-size: 0.9rem;
  font-weight: 400;
  width: 325px;
  color: ${colors.grey2};
`;

const SearchButton = styled.button`
  position: absolute;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: ${colors.white};
  background-color: ${colors.blue4};
  border-radius: 0.375rem;
  letter-spacing: 2%;
  padding: 0.375rem 0.75rem;
  border: none;
  right: 0;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${colors.blue1};
  }
`;

export { Section, Views, Flex, Input, SearchButton };
