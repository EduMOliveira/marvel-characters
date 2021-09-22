import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const CardContainer = styled.div`
  width: 122px;
  height: 220px;
  margin: 20px 10px 20px 10px;

  box-shadow: ${theme.shadow.dark};
  border-radius: 4px 52px;
  background-color: ${theme.colors.main};

  overflow: hidden;
`;

export const CardImage = styled.div`
  width: 122px;
  height: 122px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const CardBottomContainer = styled.div`
  position: relative;
  height: 39%;
  max-height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;

  span {
    font-family: ${theme.font.default};
    font-weight: bold;
    font-size: 14px;
    word-break: break-all;
    margin: 5px 5px 0 5px;

    color: ${theme.colors.lightText};
  }
`;

export const CardButton = styled.button`
  position: absolute;
  bottom: -2px;
  right: 5px;
  width: 52px;
  height: 16px;

  border-radius: 4px;
  border: none;

  font-size: 11px;
  font-family: ${theme.font.default};
  font-weight: 500;
  color: ${theme.colors.lightText};

  background: ${theme.colors.detail};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.detailHover};
  }
`;
