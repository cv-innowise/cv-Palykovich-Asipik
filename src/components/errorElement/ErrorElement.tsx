import { useRouteError } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import { ErrorContainer } from "./ErrorElementWrapper";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  const theme = useTheme();
  return (
    <ErrorContainer>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        style={{ color: theme.palette.error.dark }}
      >
        There is an error...
      </Typography>
    </ErrorContainer>
  );
};

export default ErrorElement;
