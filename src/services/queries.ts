import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser {
    signup(auth: { email: "user3@example.com", password: "291290@Asd" }) {
      user {
        id
        email
        is_verified
      }
      access_token
      refresh_token
    }
  }
`;
