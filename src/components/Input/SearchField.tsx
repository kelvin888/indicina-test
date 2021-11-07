import styled from "styled-components";

export const SearchField = styled.input<{ width?: string; height?: string }>`
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 100px;
  width: ${(props) => `${props.width || "100%"}`};
  height: ${(props) => `${props.height || "50px"}`};
  padding: 0 1rem;
`;
