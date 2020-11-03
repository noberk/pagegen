import styled from "styled-components";

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  touch-action: none;
  overflow: auto;
  background-color: #ffffff;
  outline: none;
  display: flex;
`;

export const Div = styled.div``;

export const Aside = styled.aside`
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 3px;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
