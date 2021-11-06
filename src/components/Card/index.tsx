import React, { FC } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
  border-radius: 3px;
`;

export const Card: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
