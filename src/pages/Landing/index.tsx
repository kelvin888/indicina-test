import styled from "styled-components";
import { Box } from "rebass";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export const LandingContainer = styled.div`
  min-height: 100vh;
`;

export const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`/search`);
  };

  return (
    <LandingContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Button onClick={handleLogin}>Login to Github</Button>
      </Box>
    </LandingContainer>
  );
};
