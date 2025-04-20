import { Typography } from '@mui/material';
import { AuthForm, AuthFormInputs } from '../../components';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../../services/auth/query';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledContainer, StyledText } from './Login.styled';

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [login, { loading, error }] = useLazyQuery(LOGIN);

  const handleSubmit = async (data: AuthFormInputs) => {
    try {
      const response = await login({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      if (response.data) {
        const { access_token, user } = response.data.login;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user_id', user.id);
        navigate('/users');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledContainer>
      <Typography variant="h4" align="center">
        {t('auth.login.title')}
      </Typography>
      <StyledText variant="subtitle1" align="center">
        {t('auth.login.text')}
      </StyledText>
      <AuthForm
        buttonType="log"
        onSubmit={(data: AuthFormInputs) => handleSubmit(data)}
        isSubmitting={loading}
        errorMessage={error ? error.message : null}
      />
      <StyledButton variant="text">{t('auth.login.extraButton')}</StyledButton>
    </StyledContainer>
  );
};
