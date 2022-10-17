import { gql } from '@apollo/client';
import { REPOSITORY_BSAE } from './fragments'

export const GET_REPOSITORIES = gql`
query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
  repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $searchKeyword) {
    edges {
      node {
        ...repositoryBase
      }
    }
  }
}
${REPOSITORY_BSAE}
`



export const GET_LOGGED_USER = gql`
query Me {
  me {
    id
    username
  }
}

`

export const GET_REPOSITORY_BY_ID = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    ...repositoryBase
    url
    reviews {
      edges {
        node {
          user {
            username
          }
          rating
          id
          text
          createdAt
        }
      }
    }
  }
  
}
${REPOSITORY_BSAE}

`