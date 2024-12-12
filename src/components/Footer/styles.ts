import styled from "styled-components";
import colors from "@/theme/colors";

const Section = styled.footer`
  padding: 2rem 0;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 5%;
  line-height: 0.975rem;
  color: ${colors.grey2};
`;

const Input = styled.input`
  padding: 0.688rem 1.063rem 0.688rem 0.688rem;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.125rem;
  border-radius: 0.375rem;
  border: 1px solid ${colors.grey3};
  box-shadow: 0px 1px 1px ${colors.grey3};
  appearance: none;

  width: 50px;
  text-align: center;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PageNext = styled.button`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.125rem;
  padding: 0.688rem 1.063rem;
  border-radius: 0.375rem;
  border: 1px solid ${colors.grey3};
  background-color: ${colors.white};
  box-shadow: 0px 1px 1px ${colors.grey3};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export { Section, Flex, Text, Input, InputContainer, PageNext };
