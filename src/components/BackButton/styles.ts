import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const BackButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  font-family: ${theme.font.default};
  font-weight: 700;
  color: ${theme.colors.darkText};

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-decoration: none;

  span {
    margin-top: -3px;
  }
`;
