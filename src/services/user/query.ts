import { gql } from '@apollo/client';

export const GET_CURRENT_EMPLOYE = gql`
  query GetEmploye($userId: ID!) {
    user(userId: $userId) {
      id
      email
      profile {
        firstName: first_name
        lastName: last_name
        fullName: full_name
        avatar
      }
      departmentName: department_name
      positionName: position_name
      role
    }
  }
`;
