import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query Query {
    allUsers {
      id
      username
      email
      role
      articles {
        id
        title
      }
    }
  }
`
export const GET_USER = gql`
  query Query($userId: Int!) {
    user(id: $userId) {
      username
      email
      role
      articles {
        id
        title
        body
      }
    }
  }
`
export const GET_ALL_ARTICLES = gql`
  query Query {
    allArticles {
      id
      title
      body
      user {
        username
      }
    }
  }
`