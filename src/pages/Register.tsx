import { Button, Typography } from '@mui/material';
import { AuthForm, AuthFormInputs } from '../components';
import { Container, styled } from '@mui/system';
import { toRem } from '../utils';
import { useTranslation } from 'react-i18next';

const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  padding: 0;
`;

const CustomButton = styled(Button)`
  min-width: ${toRem(220)};
  border-radius: ${toRem(40)};
  margin-top: ${toRem(8)};
  color: ${({ theme }) => theme.palette.text.primary};
`;

const Text = styled(Typography)`
  margin: ${toRem(24)} 0 ${toRem(40)};
`;

export const Register = () => {
  const { t } = useTranslation();

  const handleSubmit = (data: AuthFormInputs) => {
    console.log(data);
  };

  return (
    <ContainerStyled>
      <Typography variant="h4" align="center">
        {t('auth.register.title')}
      </Typography>
      <Text variant="subtitle1" align="center">
        {t('auth.register.text')}
      </Text>
      <AuthForm buttonType={'reg'} onSubmit={handleSubmit} />
      <CustomButton variant="text">
        {t('auth.register.extraButton')}
      </CustomButton>
    </ContainerStyled>
  );
};
