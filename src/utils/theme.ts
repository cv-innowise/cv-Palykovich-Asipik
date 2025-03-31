// theme.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "rgb(239, 83, 80)",
    },
    background: {
      default: "rgb(255, 255, 255)",
    },
    text: {
      primary: "rgb(46, 46, 46)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgb(245, 245, 247)",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.04)",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(239, 83, 80)",
    },
    background: {
      default: "rgb(53, 53, 53)",
    },
    text: {
      primary: "rgb(255, 255, 255)",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgb(53, 53, 53)",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.08)",
    },
  },
});
