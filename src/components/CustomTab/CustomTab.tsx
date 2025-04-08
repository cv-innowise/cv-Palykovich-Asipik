import { styled, Tab, Tabs } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toRem } from '../../utils';
import { useTranslation } from 'react-i18next';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  margin: toRem(8),
  color: theme.palette.text.primary,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.text.primary,
  minWidth: toRem(150),
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));

export const CustomTab = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const activeTab = location.pathname === '/auth/signup' ? 'signup' : 'login';

  const handleChange = (_: SyntheticEvent, newValue: 'login' | 'signup') => {
    navigate(`/auth/${newValue}`);
  };

  return (
    <StyledTabs value={activeTab} onChange={handleChange} aria-label="auth tabs" centered>
      <StyledTab value="login" label={t('auth.login.tab')} />
      <StyledTab value="signup" label={t('auth.register.tab')} />
    </StyledTabs>
  );
};
