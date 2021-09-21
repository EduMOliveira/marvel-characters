import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const SearchButtonContainer = styled.button`
  background-color: ${theme.colors.detail};
  color: ${theme.colors.lightText};
  cursor: pointer;
  border: none;

  font-family: ${theme.font.default};
  font-weight: 500;
  padding: 8px;
  margin: 4px 0 8px 3px;
  border-radius: 3px;
  box-shadow: 0px 2px 2px rgba(66, 66, 66, 0.2);

  &:hover {
    background-color: ${theme.colors.detailHover};
  }
`;
