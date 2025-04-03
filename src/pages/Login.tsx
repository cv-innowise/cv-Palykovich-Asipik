import { Button, Typography } from '@mui/material';
import { AuthForm, AuthFormInputs } from '../components';
import { Container, styled } from '@mui/system';

const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 560px;
`;

export const Login = () => {

  const handleSubmit = (data: AuthFormInputs)=>{
    console.log(data);
   } 

  return (
    <ContainerStyled >
      <Typography variant="h4" align="center">
        Welcome back
      </Typography>
      <Typography variant="h6" align="center">
        Hello again! Log in to continue
      </Typography>
      <AuthForm buttonType={'log'} onSubmit={handleSubmit } />
      <Typography align="center">
          Have an account?
          <Button variant="text" size="small">
            Sign in
          </Button>
        </Typography>
    </ContainerStyled>
  );
};
