import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nmxjbq0fom01xphfpj554f/master',
  cache: new InMemoryCache()
})