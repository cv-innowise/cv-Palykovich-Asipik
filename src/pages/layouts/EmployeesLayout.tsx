import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@mui/material';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: none;
  /* align-items: center; */
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const EmployeesLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};
