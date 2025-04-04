import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation SignUp($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        email
        is_verified
      }
      access_token
    }
  }
`;
