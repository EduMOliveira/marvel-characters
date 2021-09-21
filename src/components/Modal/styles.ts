import styled from "styled-components";
import { theme } from "../../global/styles/theme";

type ModalProps = {
  show: boolean;
};

export const ModalContainer = styled.div<ModalProps>`
  position: absolute;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-width: 500px;
  top: 20%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;

  box-shadow: ${theme.shadow.dark};
  background-color: ${theme.colors.lightBackground};
`;

export const ModalCloseButton = styled.div`
  width: 55%;
  margin-top: 20px;
  padding: 8px 12px;
  border-radius: 4px;

  cursor: pointer;
  user-select: none;

  font-family: ${theme.font.default};
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: ${theme.colors.lightText};

  background-color: ${theme.colors.detail};

  &:hover {
    background-color: ${theme.colors.detailHover};
  }
`;

export const ModalTitle = styled.span`
  font-family: ${theme.font.default};
  font-weight: 700;
  font-size: 28px;

  margin-bottom: 20px;
`;
