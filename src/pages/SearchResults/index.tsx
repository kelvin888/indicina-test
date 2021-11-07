import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Box } from "rebass";
import styled from "styled-components";
import { Card } from "../../components/Card";
import { RepoCard } from "../../components/RepoCard";
import { UserCard } from "../../components/UserCard";
import { useGitSearch } from "../../services/gitApi";
import { useGlobalContext } from "../../context/GlobalContext";

const SearchResultsContainer = styled.div`
  background-color: #e5e5e5;
`;

const ResultsContent = styled.div`
  transition: all 0.25s ease-in-out;
  position: relative;
  overflow-y: scroll;
`;

const Sidebar = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  height: 140px;
  position: fixed;
  width: 235px;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin-left: auto;
`;

const ListHeading = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 1rem;
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SidebarOption = styled.div<{ active?: boolean }>`
  width: 180px;
  height: 40px;
  left: 30px;
  top: 30px;
  background: ${(props) => (props.active ? "#f7f7f8" : "#ffffff")};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const OptionName = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #5c5c5c;
`;

const OptionBadge = styled.div`
  width: 40px;
  height: 20px;
  background: #dcdcdf;
  border-radius: 10px;
  padding: 0.3rem;
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  color: #5c5c5c;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchResults = () => {
  const { state } = useGlobalContext();

  const { data, error, isLoading, isSuccess } = useGitSearch(
    state.searchKeyword,
    state.queryType
  );

  console.log("data from git", data);

  return (
    <SearchResultsContainer>
      <Header search logo />
      <Container>
        <Box
          marginTop="80px"
          padding="1rem 6rem"
          // minHeight="100vh"
          overflow="auto"
        >
          <ResultsContent>
            <Sidebar>
              <SidebarOption active>
                <OptionName>Repositories</OptionName>
                <OptionBadge>492k</OptionBadge>
              </SidebarOption>
              <SidebarOption>
                <OptionName>Users</OptionName>
                <OptionBadge>120</OptionBadge>
              </SidebarOption>
            </Sidebar>
            <CardListContainer>
              <ListHeading>2,985 repository results</ListHeading>
              <ResultItem>
                <RepoCard />
                <RepoCard />
                <RepoCard />
                <RepoCard />
                <RepoCard />
              </ResultItem>
              <ResultItem>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
              </ResultItem>
            </CardListContainer>
          </ResultsContent>
        </Box>
      </Container>
    </SearchResultsContainer>
  );
};
