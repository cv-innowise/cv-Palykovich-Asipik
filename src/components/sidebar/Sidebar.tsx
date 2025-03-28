import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { NavLink, Outlet } from "react-router-dom";
import { links } from "../../utils";
import Wrapper from "./SidebarWrapper";
import UserLogo from "../userLogo/UserLogo";
import UserMenu from "../userMenu/UserMenu";

const drawerWidth = 12.5;

const openedMixin = (theme: Theme): CSSObject => ({
  width: `${drawerWidth}rem`,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 0.0625rem)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 0.0625rem)`,
  },
  border: "none",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: `${drawerWidth}rem`,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: { open: true },
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: { open: false },
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
            {links.map(({ title, url, icon: Icon }) => (
              <ListItem key={title} disablePadding className="listItem">
                <NavLink
                  to={url}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "var(--black)" : "var(--black-light)",
                  })}
                >
                  {({ isActive }) => (
                    <ListItemButton
                      sx={{
                        backgroundColor: isActive
                          ? "var(--black-background-light)"
                          : "transparent",
                      }}
                      className="listItemButton"
                    >
                      <ListItemIcon
                        sx={{
                          color: isActive
                            ? "var(--black)"
                            : "var(--black-light)",
                        }}
                        className="listItemIcon"
                      >
                        <Icon />
                      </ListItemIcon>
                      <ListItemText
                        primary={title}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: isActive
                            ? "var(--black)"
                            : "var(--black-light)",
                        }}
                      />
                    </ListItemButton>
                  )}
                </NavLink>
              </ListItem>
            ))}
          </List>
          <ListItem
            disablePadding
            className="listItem logo"
            onClick={handleClick}
          >
            <ListItemButton
              sx={{
                "&:hover": "var(--black-background-light)",
              }}
              className="listItemButton"
            >
              <UserLogo username="Anatoli Paliukhovich" isOpen={open} />
            </ListItemButton>
          </ListItem>

          <Box className="iconButtonBox">
            <IconButton onClick={toggleDrawer} className="iconButton">
              <KeyboardArrowLeftIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: open ? "rotate(0deg)" : "rotate(180deg)",
                }}
              />
            </IconButton>
          </Box>
        </Drawer>
        <Box component="main" className="outletBox">
          <Outlet />
        </Box>
        <Box className="bottomBar">
          {links.map(({ title, url, icon: Icon }) =>
            title === "CVs" ? null : (
              <NavLink
                key={title}
                to={url}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "var(--black)" : "var(--black-light)",
                })}
              >
                {({ isActive }) => (
                  <ListItemButton
                    sx={{
                      backgroundColor: isActive
                        ? "var(--black-background-light)"
                        : "transparent",
                    }}
                    className="iconButtonBottomBar"
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? "var(--black)" : "var(--black-light)",
                      }}
                      className="listItemIconBottom"
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={title}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: isActive ? "var(--black)" : "var(--black-light)",
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
                  "&:hover": "var(--black-background-light)",
                  marginTop: "-8px",
                }}
                className="iconButtonBottomBar"
              >
                <UserLogo
                  username="Anatoli Paliukhovich"
                  isOpen={open}
                  imageUrl=""
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
