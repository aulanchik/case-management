import styled from "styled-components";
import colors from "@/theme/colors";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`;

const Views = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Select = styled.select`
  background-color: #7d90b2;
  border: 1px solid #5f7cb0;
  border-radius: 0.375rem;
  padding: 6px 12px;
  color: ${colors.white};
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.25rem;
  letter-spacing: 2%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::-ms-expand {
    display: none;
  }

  &::after {
    content: "\\25BE";
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    pointer-events: none;
    color: white;
    font-size: 0.9rem;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-shadow: 1px solid ${colors.grey1};
`;

const Input = styled.input`
  padding: 0.45rem 4.688rem 0.45rem 0.45rem;
  border: 1px solid ${colors.grey};
  border-radius: 0.375rem;
  font-size: 0.9rem;
  font-weight: 400;
  width: 325px;
  color: ${colors.grey2};
  padding-left: 35px;
  padding-right: 80px;
`;

const Icon = styled.img`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  background-color: ${colors.blue2};
  color: ${colors.white};
  padding: 0 1rem;
  height: 34px;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 200ms ease;
  font-size: 0.9rem;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    background-color: ${colors.blue1};
  }
`;

export { Section, Views, Select, Flex, Input, Icon, SearchButton };
