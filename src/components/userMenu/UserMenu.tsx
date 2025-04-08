import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { clearStorage } from '../../services/auth/service';

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ anchorEl, onClose }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const handleLogout = () => {
    clearStorage();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      slotProps={{
        list: {
          'aria-labelledby': 'user-logo-button',
        },
      }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <MenuItem onClick={onClose} component={Link} to="/profile">
        <AccountCircleIcon
          style={{
            marginRight: 8,
            color: theme.palette.text.secondary,
          }}
        />
        {t('userMenu.profile')}
      </MenuItem>
      <MenuItem onClick={onClose} component={Link} to="/settings">
        <SettingsIcon
          style={{ marginRight: 8, color: theme.palette.text.secondary }}
        />
        {t('userMenu.settings')}
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout} component={Link} to="auth/login">
        <LogoutIcon
          style={{ marginRight: 8, color: theme.palette.text.secondary }}
        />
        {t('userMenu.logout')}
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
