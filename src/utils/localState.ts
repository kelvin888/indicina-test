const authState = localStorage.getItem("authState");
export const getAuthState = () => {
  if (authState) {
    try {
      return JSON.parse(authState);
    } catch (error) {
      return "";
    }
  }
};
