import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 185px;
  height: 50px;
  position: relative;
  margin-left: auto;
  display: flex;
`;

export const DropdownTrigger = styled.div`
  width: 100%;
  display: flex;
  min-height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownContent = styled.div<{ show: boolean }>`
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
  display: ${(props) => (props.show ? "block" : "none")};

  &::before {
    content: "";
    width: 0px;
    height: 12px;
    border: 0.6em inset transparent;
    position: absolute;
    right: 3px;
    top: -46px;
    border-bottom: 25px solid #ffffff;
  }
`;
