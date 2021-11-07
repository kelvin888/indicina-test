import styled from "styled-components";
import { Box } from "rebass";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { useMutation } from "react-query";
import { authenticateUser } from "../../services/indicinaAuth";
import { useEffect } from "react";
//@ts-ignore
import LoginGithub from "react-login-github";
import { useGlobalContext } from "../../context/GlobalContext";

export const LandingContainer = styled.div`
  min-height: 100vh;
`;

export const Landing = () => {
  const navigate = useNavigate();
  const { state } = useGlobalContext();
  console.log("global state, ", state);

  const authMutation = useMutation((code: string) => authenticateUser(code));

  useEffect(() => {
    if (authMutation.isSuccess) {
      // Use the access_token contained in the response from our API Authentication Backendas your authorisation on git
      console.log(authMutation.data.data);
      localStorage.setItem("authState", JSON.stringify(authMutation.data.data));
      navigate("/search");
    }
  }, [authMutation, navigate]);

  const onSuccess = (response: { code: string }) => {
    authMutation.mutate(response.code);
  };
  const onFailure = (response: any) => console.error(response);

  return (
    <LandingContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <LoginGithub
          clientId={process.env.REACT_APP_GIT_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
        >
          <Button>Login to Github</Button>
        </LoginGithub>
      </Box>
    </LandingContainer>
  );
};
