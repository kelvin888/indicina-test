import { useNavigate } from "react-router";
import { Box } from "rebass";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { SearchField } from "../../components/Input/SearchField";
import { Image } from "../../components/Image";
import GitLogo from "../../assets/img/git-logo.png";
import { Container } from "../../components/Container";
import React from "react";

export const Button = styled.button`
  width: 179px;
  height: 40px;
  background: #5c5c5c;
  border-radius: 5px;
  font-family: "DM Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`;

export const Search = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search-results");
  };
  return (
    <React.Fragment>
      <Header />

      <Container>
        <Box minHeight="100vh">
          <Box
            height="250px"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
          >
            <Image src={GitLogo} height="70px" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
            sx={{
              display: "grid",
              gridGap: 4,
            }}
            padding="20px"
          >
            <SearchField width="580px" />
            <Button onClick={handleSearch}>Search Github</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
