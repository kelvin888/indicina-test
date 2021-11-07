import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/",
  headers: {
    "Content-Type": "application/json",
  },
});
