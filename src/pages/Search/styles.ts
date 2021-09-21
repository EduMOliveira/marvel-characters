import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const SearchTitle = styled.span`
  font-family: ${theme.font.default};
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  margin-bottom: 4px;
  padding-top: 50px;
`;

export const SearchSlug = styled.span`
  font-family: ${theme.font.default};
  font-weight: 700;
  font-size: 26px;
  text-align: center;

  padding: 6px 10px;
  word-break: break-all;

  background-color: ${theme.colors.detail};
  color: ${theme.colors.lightText};
`;
