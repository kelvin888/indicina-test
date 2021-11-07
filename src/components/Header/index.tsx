import { FC, useState } from "react";
import styled from "styled-components";
import { Image } from "../../components/Image";
import GitLogo from "../../assets/img/git-logo.png";
import CaretDown from "../../assets/img/caret-down.svg";
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
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0px;
  background: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(196, 203, 214, 0.7);
  z-index: 1;
`;

const LogoutText = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #ff1733;
`;

const ProfileName = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  width: 100px;
  height: 19px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Header: FC<{
  logo?: boolean;
  search?: boolean;
}> = ({ logo, search }) => {
  const [showprofileDropdown, setShowProfileDropdown] = useState(false);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showprofileDropdown);
  };
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
            <DropdownTrigger onClick={toggleProfileDropdown}>
              <Avatar src={User} />
              <ProfileName>Kelvin Orhungul</ProfileName>
              <img src={CaretDown} alt="caret-down" />
            </DropdownTrigger>
            <DropdownContent show={showprofileDropdown}>
              <Box
                width="100%"
                height="63px"
                display="flex"
                alignItems="center"
                paddingLeft="2rem"
              >
                <LogoutText>Logout</LogoutText>
              </Box>
            </DropdownContent>
          </DropdownContainer>
        </Box>
      </Container>
    </HeaderContainer>
  );
};
