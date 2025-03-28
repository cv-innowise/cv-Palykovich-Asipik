import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ anchorEl, onClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      slotProps={{
        list: {
          "aria-labelledby": "user-logo-button",
        },
      }}
      transformOrigin={{ vertical: "bottom", horizontal: "left" }}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <MenuItem onClick={onClose} component={Link} to="/profile">
        <AccountCircleIcon
          style={{
            marginRight: 8,
            color: "var(--black-light)",
          }}
        />
        Profile
      </MenuItem>
      <MenuItem onClick={onClose} component={Link} to="/settings">
        <SettingsIcon style={{ marginRight: 8, color: "var(--black-light)" }} />
        Settings
      </MenuItem>
      <Divider />
      <MenuItem onClick={onClose}>
        <LogoutIcon style={{ marginRight: 8, color: "var(--black-light)" }} />
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
