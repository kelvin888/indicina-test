import { authInstance } from "./axios/authClient";

export const authenticateUser = async (authCode: string) => {
  const response = await authInstance.post("auth", {
    code: authCode,
  });
  return response.data;
};
