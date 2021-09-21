import styled from "styled-components";

export const TextAreaContainer = styled.textarea`
  width: 80%;
  max-width: 80%;
  height: 120px;
  margin: 4px 0 8px 0;

  border: 1px solid #cccccc;
  border-radius: 3px;

  font-size: 14px;
  color: #000000;

  resize: none;
  overflow: auto;

  &:focus {
    outline: none;
  }
`;
