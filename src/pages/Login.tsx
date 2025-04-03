import { Button, Typography } from '@mui/material';
import { AuthForm, AuthFormInputs } from '../components';
import { Container, styled } from '@mui/system';
import { toRem } from '../utils';
import { useTranslation } from 'react-i18next';

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

  const handleSubmit = (data: AuthFormInputs) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <Typography variant="h4" align="center">
        {t('auth.login.title')}
      </Typography>
      <StyledText variant="subtitle1" align="center">
        {t('auth.login.text')}
      </StyledText>
      <AuthForm buttonType="log" onSubmit={handleSubmit} />
      <StyledButton variant="text">{t('auth.login.extraButton')}</StyledButton>
    </StyledContainer>
  );
};
