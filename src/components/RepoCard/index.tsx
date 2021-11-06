import { FC } from "react";
import styled from "styled-components";

const RepoCardContainer = styled.div`
  padding: 0.25em 1em;
  width: 179px;
  height: 50px;
  background: #5c5c5c;
  border-radius: 5px;
  cursor: pointer;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`;

export const RepoCard: FC<{
  btnText: string;
}> = ({ btnText }) => {
  return <RepoCardContainer>{btnText}</RepoCardContainer>;
};
