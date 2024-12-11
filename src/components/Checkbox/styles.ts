import styled, { css } from "styled-components";
import colors from "@/theme/colors";

const CheckboxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  opacity: 0;
  cursor: pointer;

  &:hover ~ .checkmark {
    box-shadow: 0 0 0 4px rgb(63 118 240 / 10%);
    transition: box-shadow 200ms ease;
  }

  &:checked ~ .checkmark {
    background-color: ${colors.blue2};
    border: 1px solid transparent;

    &:after {
      display: block;
    }
  }

  ${(props) =>
    props.value &&
    css`
      & ~ .checkmark {
        background-color: ${colors.blue2};
        border: 1px solid transparent;

        &:after {
          display: block;
        }
      }
    `}
`;

const CheckboxLabel = styled.label`
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 1px solid ${colors.grey};
  background-color: ${colors.white};
  border-radius: 2px;
  transition: box-shadow 200ms ease;

  &:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid ${colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    display: none;
  }
`;

export { CheckboxInput, CheckboxLabel, Checkmark };
