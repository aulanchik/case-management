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
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${colors.grey};
  border-radius: 0.25rem;
  width: 325px;
`;

export { Section, Views, Flex, Input };
