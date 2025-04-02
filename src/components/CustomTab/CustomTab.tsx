import { Tab, Tabs, useTheme } from '@mui/material';
import { SyntheticEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const CustomTab = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  const activeTab =
    location.pathname === '/auth/register' ? 'register' : 'login';

  const handleChange = (_: SyntheticEvent, newValue: 'login' | 'register') => {
    navigate(`/auth/${newValue}`);
  };

  const tabStyles = {
    color: theme.palette.text.primary,
    minWidth: 150,
    '&.Mui-selected': {
      color: theme.palette.primary.main,
    },
  };

  return (
    <Tabs
      value={activeTab}
      onChange={handleChange}
      aria-label="auth tabs"
      centered
      sx={{
        margin: theme.spacing(2),
        color: theme.palette.text.primary,
        '& .MuiTabs-indicator': {
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      <Tab value="login" label="log in" sx={tabStyles} />
      <Tab value="register" label="sign up" sx={tabStyles} />
    </Tabs>
  );
};
