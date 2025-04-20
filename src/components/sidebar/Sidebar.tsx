import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils';
import UserLogo from '../UserLogo/UserLogo';
import UserMenu from '../UserMenu/UserMenu';
import { useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Drawer, Wrapper } from './Sidebar.styled';
import { useCurrentUser } from '../../hooks/hooks';

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const { t } = useTranslation();
  const { user } = useCurrentUser();

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <Box className="mainBody">
        <CssBaseline />
        <Drawer variant="permanent" open={open} className="drawer">
          <Divider />
          <List className="list">
            {links.map(({ titleKey, url, icon: Icon }) => (
              <ListItem key={titleKey} disablePadding className="listItem">
                <NavLink
                  to={url}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
                  })}
                >
                  {({ isActive }) => (
                    <ListItemButton
                      sx={{
                        backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
                        '&:hover': {
                          backgroundColor: theme.palette.action.hover,
                        },
                      }}
                      className="listItemButton"
                    >
                      <ListItemIcon
                        sx={{
                          color: isActive
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                        }}
                        className="listItemIcon"
                      >
                        <Icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={t(titleKey)}
                        sx={{
                          opacity: open ? 1 : 0,
                          transition: theme.transitions.create('opacity', {
                            duration: theme.transitions.duration.short,
                          }),
                        }}
                      />
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>
            ))}
          </List>
          <ListItem disablePadding className="listItem logo" onClick={handleClick}>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
              className="listItemButton"
            >
              <UserLogo
                username={user?.profile?.fullName ?? 'user'}
                isOpen={open}
                imageUrl={user?.profile?.avatar}
              />
            </ListItemButton>
          </ListItem>

          <Box className="iconButtonBox">
            <IconButton onClick={toggleDrawer} className="iconButton">
              <KeyboardArrowLeftIcon
                sx={{
                  transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.short,
                  }),
                  transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
                }}
              />
            </IconButton>
          </Box>
        </Drawer>
        <Box className="bottomBar">
          {links.map(({ titleKey, url, icon: Icon }) =>
            titleKey === 'links.cvs' ? null : (
              <NavLink
                key={titleKey}
                to={url}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
                })}
              >
                {({ isActive }) => (
                  <ListItemButton
                    sx={{
                      backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
                      transition: theme.transitions.create('background-color', {
                        duration: theme.transitions.duration.short,
                      }),
                      marginTop: '8px',
                    }}
                    className="iconButtonBottomBar"
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
                      }}
                      className="listItemIconBottom"
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={t(titleKey)}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: isActive ? theme.palette.text.primary : theme.palette.text.secondary,
                        transition: theme.transitions.create('opacity', {
                          duration: theme.transitions.duration.short,
                        }),
                      }}
                      className="listItemTextBottom"
                    />
                  </ListItemButton>
                )}
              </NavLink>
            )
          )}
          <List>
            <ListItem disablePadding className="listItem" onClick={handleClick}>
              <ListItemButton
                sx={{
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  transition: theme.transitions.create('background-color', {
                    duration: theme.transitions.duration.short,
                  }),
                }}
                className="iconButtonBottomBar"
              >
                <div>{user?.profile?.fullName}</div>
                <UserLogo
                  username={user?.profile?.fullName ?? 'user'}
                  isOpen={open}
                  imageUrl={user?.profile?.avatar}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      <UserMenu anchorEl={anchorEl} onClose={handleClose} />
    </Wrapper>
  );
}
