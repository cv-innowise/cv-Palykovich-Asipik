import { Button, Typography } from '@mui/material';
import { AuthForm, AuthFormInputs } from '../components';
import { Container, styled } from '@mui/system';
import { toRem } from '../utils';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { LOGIN } from '../services/auth/query';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${toRem(560)};
  padding: 0;
`;

const StyledButton = styled(Button)`
  min-width: ${toRem(220)};
  border-radius: ${toRem(40)};
  margin-top: ${toRem(8)};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const StyledText = styled(Typography)`
  margin: ${toRem(24)} 0 ${toRem(40)};
`;

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
        const { access_token } = response.data.login;
        localStorage.setItem('access_token', access_token);
        navigate('/profile');
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
