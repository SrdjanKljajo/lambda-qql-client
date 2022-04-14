import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:3000/dev/graphql',
  //uri: 'https://0i70ve27d9.execute-api.us-east-1.amazonaws.com/dev/graphql',
  cache: new InMemoryCache()
})
