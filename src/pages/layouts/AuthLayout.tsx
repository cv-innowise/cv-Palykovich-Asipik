import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { AppTheme } from '../../utils';
import { CustomTab } from '../../components/CustomTab/CustomTab';

const Wrapper = styled.div<{ theme: AppTheme }>`
display: flex;
flex-direction: column;
min-height: 100vh;
align-items: center;
/* justify-content: center; */
  padding: ${({ theme }) =>theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const AuthLayout = () => {
  return (
    <Wrapper>
      <CustomTab />
      <Outlet />
    </Wrapper>
  );
};
