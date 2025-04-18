import { gql } from '@apollo/client';

export const GET_ALL_EMPLOYEES = gql`
  query GetEmployees {
    users {
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
