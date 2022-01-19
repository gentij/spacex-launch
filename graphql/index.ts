import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launchesPast: offsetLimitPagination(),
        },
      },
    },
  }),
});
