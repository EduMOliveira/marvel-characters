import styled from "styled-components";
import { theme } from "../../global/styles/theme";

export const CreatureCard = styled.div`
  background-color: ${theme.colors.main};
  box-shadow: ${theme.shadow.dark};
  width: 100%;
  max-width: 900px;
  min-height: 450px;
  border-radius: 30px;
  padding: 0 60px;
  margin: 100px 0px;

  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CreatureCardWrapper = styled.div`
  width: 190px;
  height: 460px;
  margin: -30px 20px 20px 0;
  border-radius: 4px 104px;
  box-shadow: ${theme.shadow.light};

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CreatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 30px 20px;
`;

export const CreatureId = styled.span`
  position: absolute;
  top: 10px;
  right: 22px;

  font-family: ${theme.font.default};
  font-weight: bold;
  font-size: 16px;
  color: ${theme.colors.lightText};
`;

export const CreatureTitleWrapper = styled.div`
  margin-right: 10px;

  span {
    display: inline-block;
    text-align: center;
    color: ${theme.colors.lightText};
    font-family: ${theme.font.default};
    font-weight: bold;
    font-size: 36px;
    background-color: ${theme.colors.detail};
    padding: 6px 10px;
    word-break: break-all;
  }
`;

export const CreatureDesc = styled.span`
  padding-top: 5px;
  color: ${theme.colors.lightText};
  font-family: ${theme.font.default};
  font-size: 14px;
  text-align: justify;
  margin-right: 10px;
`;

export const CreatureSubTitle = styled.span`
  color: ${theme.colors.lightText};
  font-family: ${theme.font.default};
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
`;

export const CreatureSeries = styled.div`
  width: 100%;
  height: 100%;
  max-height: 180px;
  padding: 4px 8px;

  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  overflow-y: scroll;

  // scrollbar styles
  ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.detail};
    border-radius: 11px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.detailHover};
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightText};
    border-radius: 11px;
    box-shadow: inset 0px 0px 0px 0px ${theme.colors.lightText};
  }
`;

export const CreatureSeriesItem = styled.div`
  min-width: 220px;
  padding: 4px;
  margin-top: 4px;

  color: ${theme.colors.lightText};
  font-family: ${theme.font.default};
  font-weight: bold;
  font-size: 20px;

  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
`;

export const CreatureEditButton = styled.button`
  position: absolute;
  top: 40px;
  right: 19px;
  padding: 6px 16px;

  border-radius: 8px;
  border: none;

  font-size: 12px;
  font-family: ${theme.font.default};
  font-weight: 500;
  color: ${theme.colors.lightText};

  background: ${theme.colors.detail};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.detailHover};
  }
`;
