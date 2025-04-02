import { Typography } from '@mui/material';
import { LoginForm } from '../components';

const Login = () => {
  return (
    <div>
      <Typography variant="h4" align="center">
        Welcome back
      </Typography>
      <Typography variant="h6" align="center">
        Hello again! Log in to continue
      </Typography>
      <LoginForm />
    </div>
  );
};
export default Login;
