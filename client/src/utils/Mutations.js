import { gql } from "@apollo/client";

export const ADD_USER =gql`
mutation NewUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
      }
    }
  }
`;