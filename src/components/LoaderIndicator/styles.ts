import styled, { keyframes } from "styled-components";
import { LoaderProps } from "../LoaderIndicator";

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const LoaderContainer = styled.div<LoaderProps>`
  border: ${(props) => `${props.weight}px`};
  border-color: #f3f3f3;
  border-style: solid;
  border-radius: 50%;
  border-top-color: ${(props) => props.color};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  animation: ${rotate} 2s linear infinite;
`;
