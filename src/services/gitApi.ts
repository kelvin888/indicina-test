import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";
import { getAuthState } from "../utils/localState";

const API_URL = `https://api.github.com/graphql`;
const authState = getAuthState();
const graphQLClient = new GraphQLClient(API_URL, {
  headers: {
    Authorization: `Bearer ${authState?.access_token}`,
  },
});

console.log("authState: ", authState);

export function useGitSearch(query: string, type: string) {
  return useQuery("git-search", async () => {
    const { data } = await graphQLClient.request(gql`
      {
        search(query: ${query}, type: ${type}, first: 10) {
          edges {
            node {
              __typename
              ... on Repository {
                id
                name
                description
                createdAt
              }
            }
          }
        }
      }
    `);
    return data;
  });
}
