import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  useTheme,
} from '@mui/material';

interface LoginFormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      console.log('Logging in with:', data);
      // данные на сервер
    } catch (error) {
      setErrorMessage('Invalid email or password.');
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(2), // Используем spacing из темы
          mt: theme.spacing(5),
          p: theme.spacing(3),
          // width: 300,
        }}
      >
        {errorMessage && (
          <Typography color="error" align="center">
            {errorMessage}
          </Typography>
        )}

        <TextField
          label="Email"
          fullWidth
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={!!errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  // onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
              {errors.password.message}
            </Typography>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          Create account
        </Button>

        <Typography align="center">
          Have an account?{' '}
          <Button variant="text" size="small">
            Sign in
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};
