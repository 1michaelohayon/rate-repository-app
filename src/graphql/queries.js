import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        id
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ownerAvatarUrl
      }
    }
  }
}
`

export const SIGN_IN = gql`
mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
    user {
      id
      username
    }
  }
}
`


export const GET_LOGGED_USER = gql`
query Me {
  me {
    id
    username
  }
}

`