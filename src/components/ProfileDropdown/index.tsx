import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 50px;
  position: relative;
  margin-left: auto;
`;

const Trigger = styled.div`
  max-width: 150px;
  display: flex;
  min-height: 50px;
`;

const Content = styled.div`
  min-height: 63px;
  position: absolute;
  width: 180px;
  top: 80px;
  right: 0;
  background: #ffffff;
  border: 1px solid rgba(196, 203, 214, 0.3);
  box-sizing: border-box;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.2);
  border-radius: 3px;

  &::before {
    content: "";
    width: 0px;
    height: 12px;
    border: 0.6em inset transparent;
    position: absolute;
    right: 10px;
    top: -47px;
    border-bottom: 25px solid #ffffff;
  }
`;

export const DropdownContainer: FC = ({ children }) => (
  <Container>{children}</Container>
);
export const DropdownTrigger: FC = ({ children }) => (
  <Trigger>{children}</Trigger>
);
export const DropdownContent: FC = ({ children }) => (
  <Content>{children}</Content>
);
