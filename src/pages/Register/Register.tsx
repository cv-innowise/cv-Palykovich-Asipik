import { Typography } from '@mui/material';
import { AuthForm, AuthFormInputs } from '../../components';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { SIGNUP } from '../../services/auth/mutation';
import { ContainerStyled, CustomButton, TextStyled } from './Register.styled';

export const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [signup, { loading, error }] = useMutation(SIGNUP);

  const handleSubmit = async (data: AuthFormInputs) => {
    try {
      const response = await signup({
        variables: {
          auth: {
            email: data.email,
            password: data.password,
          },
        },
      });
      localStorage.setItem('access_token', response.data.signup.access_token);
      navigate('/profile');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContainerStyled>
      <Typography variant="h4" align="center">
        {t('auth.register.title')}
      </Typography>
      <TextStyled variant="subtitle1" align="center">
        {t('auth.register.text')}
      </TextStyled>
      <AuthForm
        buttonType="reg"
        onSubmit={handleSubmit}
        isSubmitting={loading}
        errorMessage={error ? error.message : null}
      />
      <CustomButton variant="text">{t('auth.register.extraButton')}</CustomButton>
    </ContainerStyled>
  );
};
