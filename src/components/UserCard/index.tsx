import { FC } from "react";
import { Box } from "rebass";
import styled from "styled-components";

const UserCardContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 6px 58px rgba(196, 203, 214, 0.1);
  border-radius: 3px;
`;

const Username = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`;

const Userrole = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #91929e;
`;

const Userdesc = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #91929e;
`;

export const UserCard: FC = () => {
  return (
    <UserCardContainer>
      <Box
        display="flex"
        sx={{
          gap: "1rem",
        }}
      >
        <Username>John Doe</Username>
        <Userrole>Lorem ipsum dolor</Userrole>
      </Box>
      <Userdesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Userdesc>
    </UserCardContainer>
  );
};
