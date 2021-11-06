import { FC } from "react";
import styled from "styled-components";
import { Image } from "../../components/Image";
import GitLogo from "../../assets/img/git-logo.png";
import User from "../../assets/img/user.png";
import { SearchField } from "../../components/Input/SearchField";
import {
  DropdownContainer,
  DropdownContent,
  DropdownTrigger,
} from "../../components/ProfileDropdown";
import { Box } from "rebass";
import { Avatar } from "../../components/Avatar";
import { Container } from "../Container";

const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 80px;
  top: 0px;
  background: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(196, 203, 214, 0.7);
`;

export const Header: FC<{
  logo?: boolean;
  search?: boolean;
}> = ({ logo, search }) => {
  return (
    <HeaderContainer>
      <Container>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {logo && <Image src={GitLogo} height="55px" />}
          {search && (
            <Box marginLeft="auto">
              <SearchField width="380px" height="40px" />
            </Box>
          )}
          <DropdownContainer>
            <DropdownTrigger>
              <Avatar src={User} />
            </DropdownTrigger>
            <DropdownContent>
              <Box
                width="100%"
                height="63px"
                display="flex"
                alignItems="center"
                paddingLeft="2rem"
              >
                Logout
              </Box>
            </DropdownContent>
          </DropdownContainer>
        </Box>
      </Container>
    </HeaderContainer>
  );
};
