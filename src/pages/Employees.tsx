import { useQuery } from '@apollo/client';
import { GET_ALL_EMPLOYEES } from '../services/users/query';
import { EmployeesTable } from '../components';

export const Employees = () => {
  const { data } = useQuery(GET_ALL_EMPLOYEES);
  console.log(data);

  return (
    <>
      <EmployeesTable data={data?.users || []} />
    </>
  );
};
