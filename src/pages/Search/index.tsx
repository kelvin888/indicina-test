import { useNavigate } from "react-router";
import { Box } from "rebass";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { SearchField } from "../../components/Input/SearchField";
import { Image } from "../../components/Image";
import GitLogo from "../../assets/img/git-logo.png";
import { Container } from "../../components/Container";
import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { actionTypes } from "../../context/actionTypes";

export const Button = styled.button`
  width: 179px;
  height: 40px;
  background: #5c5c5c;
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
`;

export const Search = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useGlobalContext();

  const handleSearch = () => {
    if (state.searchKeyword) {
      navigate("/search-results");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: actionTypes.SET_QUERY,
      payload: {
        searchKeyword: e.target.value,
      },
    });
  };

  return (
    <React.Fragment>
      <Header />

      <Container>
        <Box>
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
            sx={{
              display: "grid",
              gridGap: 4,
            }}
            padding="20px"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <SearchField width="580px" onChange={handleChange} />
            </form>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <Button onClick={handleSearch}>Search Github</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
