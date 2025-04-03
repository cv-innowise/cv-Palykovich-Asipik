import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { StyledLoginBox } from './AuthFormWrapper';

interface AuthFormProps {
  buttonType: 'reg' | 'log';
  onSubmit: (data: AuthFormInputs) => void;
}

export interface AuthFormInputs {
  email: string;
  password: string;
}


export const AuthForm = ({ buttonType, onSubmit }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthFormInputs>();

  const handleFormSubmit = async (data: AuthFormInputs) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <StyledLoginBox>
      {errorMessage && (
        <Typography color="error" align="center">
          {errorMessage}
        </Typography>
      )}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{
            input: {

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide' : 'display'}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
           disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {buttonType === 'reg' ? 'Create account' : "Log in"}
        </Button> 
        </form>
    </StyledLoginBox>
  );
};
