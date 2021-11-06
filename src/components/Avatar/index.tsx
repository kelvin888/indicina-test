import styled from "styled-components";

export const Avatar = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => `${props.width || "auto"}`};
  height: ${(props) => `${props.height || "auto"}`};
  border-radius: 50%;
`;
