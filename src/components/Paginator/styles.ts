import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const PaginatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type ButtonProps = {
  disable: boolean;
};

export const PaginatorButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  padding: 2px 8px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  border-radius: 1px;

  background-color: ${theme.colors.detail};
  font-family: ${theme.font.default};
  font-weight: 500;
  color: ${theme.colors.lightText};

  cursor: ${(props) => (props.disable ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disable ? 0.2 : 1)};
`;

export const PaginatorText = styled.span`
  font-family: ${theme.font.default};
  font-weight: 500;
  font-size: 18px;
  margin: -2px 8px 0 8px;
`;
