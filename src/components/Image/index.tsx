import styled from "styled-components";

export const Image = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => `${props.width || "auto"}`};
  height: ${(props) => `${props.height || "auto"}`};
`;
