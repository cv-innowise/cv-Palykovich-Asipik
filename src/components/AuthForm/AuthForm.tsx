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
import { StyledAuthBox } from './AuthFormWrapper';
import { useTranslation } from 'react-i18next';

interface AuthFormProps {
  buttonType: 'reg' | 'log';
  onSubmit: (data: AuthFormInputs) => void;
  isSubmitting?: boolean;
  errorMessage?: string | null;
}

export interface AuthFormInputs {
  email: string;
  password: string;
}

export const AuthForm = ({
  buttonType,
  onSubmit,
  isSubmitting,
  errorMessage,
}: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleFormSubmit = (data: AuthFormInputs) => {
    onSubmit(data);
  };

  return (
    <StyledAuthBox>
      {errorMessage && (
        <Typography color="error" align="center">
          {errorMessage}
        </Typography>
      )}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          label={t('auth.form.email')}
          fullWidth
          {...register('email', {
            required: t('auth.form.emailRequired'),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: t('auth.form.emailPattern'),
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label={t('auth.form.password')}
          type={showPassword ? 'text' : 'password'}
          fullWidth
          {...register('password', {
            required: t('auth.form.passwordRequired'),
            minLength: {
              value: 6,
              message: t('auth.form.passwordPattern'),
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
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}
        >
          {buttonType === 'reg'
            ? t('auth.register.submitButton')
            : t('auth.login.submitButton')}
        </Button>
      </form>
    </StyledAuthBox>
  );
};
