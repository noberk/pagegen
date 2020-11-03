import React, { FC } from "react";
import styled from "styled-components";

const Span = styled.span`
  &:hover {
    background-color: red;
    padding: 1px;
  }
`;

export const ElementSlot: FC<{}> = ({ children }) => {
  return <Span>{children}</Span>;
};
