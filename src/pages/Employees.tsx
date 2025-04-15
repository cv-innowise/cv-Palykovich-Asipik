// import { useTranslation } from 'react-i18next';
import { EmployeesTable } from '../components/DataTable/DataTable';
// import { SimpleTableGET_ALL_EMPLOYEES } from '../services/users/query';
// import { useLazyQuery } from '@apollo/client';

export const Employees = () => {
  // const { t } = useTranslation();

  // const [login, { loading, error }] = useLazyQuery(GET_ALL_EMPLOYEES);

  // const handleSubmit = async () => {
  //   try {
  //     const response = await ();
  //     if (response.data) {
  //       const { access_token } = response.data.login;
  //       localStorage.setItem('access_token', access_token);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // handleSubmit();

  return (
    <>
      <EmployeesTable />;
    </>
  );
};

export default Employees;
