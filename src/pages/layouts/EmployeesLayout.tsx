import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '@mui/material';
import { CustomBreadcrumbs } from '../../components/CustomBreadcrumbs/CustomBreadcrumbs';

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: none;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;

// const Content = styled.div`
//   flex-grow: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
// `;

export const EmployeesLayout = () => {
  return (
    <Wrapper>
      {/* <Content> */}
      <Outlet />
      {/* </Content> */}
    </Wrapper>
  );
};
