import { gql } from '@apollo/client'

export const DELETE_USER = gql`
  mutation Mutation($deleteUserId: Int!) {
    deleteUser(id: $deleteUserId)
  }
`
export const CREATE_ARTICLE = gql`
  mutation Mutation($title: String!, $body: String!, $userId: Int) {
  createArticle(title: $title, body: $body, userId: $userId) {
    title
    body
  }
}
`
export const DELETE_ARTICLE = gql`
  mutation Mutation($deleteArticleId: Int!) {
    deleteArticle(id: $deleteArticleId)
  }
`

export const REGISTER_USER = gql`
  mutation Mutation($email: String!, $password: String!, $username: String!) {
    registerUser(email: $email, password: $password, username: $username) {
      token
      message
    }
  }
`
export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
