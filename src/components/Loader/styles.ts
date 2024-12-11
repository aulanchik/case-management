import styled, { css, keyframes } from "styled-components";
import colors from "@/theme/colors";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.span<{ $active?: boolean }>`
  display: none;

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${colors.blue2};
    border-color: ${colors.blue2} transparent ${colors.blue2} transparent;
    animation: ${rotate} 1.2s linear infinite;
    z-index: 1000;
  }

  ${(props) =>
    props.$active &&
    css`
      display: block;
    `}
`;

export { rotate, Spinner };
