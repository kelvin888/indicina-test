import { FC } from "react";
import styled from "styled-components";

const RepoCardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
  border-radius: 3px;
`;

const RepoName = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`;

const RepoDesc = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #91929e;
`;

const RepoDetails = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #91929e;
`;

export const RepoCard: FC = () => {
  return (
    <RepoCardContainer>
      <RepoName>DrKLO/Telegram</RepoName>
      <RepoDesc>Telegram for Android source</RepoDesc>
      <RepoDetails>
        17.2k Stars | Java | GPL-2.0 License | Updated 4 hours ago
      </RepoDetails>
    </RepoCardContainer>
  );
};
