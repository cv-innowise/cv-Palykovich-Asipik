import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Button, Typography, Box, useTheme } from "@mui/material";
import styled from "styled-components";
import { toRem } from "../utils";

const ErrorContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${toRem(16)};
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Error = () => {
  const error = useRouteError();
  const theme = useTheme();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <ErrorContainer>
        <Typography
          variant="h1"
          sx={{
            fontSize: "9rem",
            fontWeight: 600,
            color: theme.palette.error.dark,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
        >
          Page is not found
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "2rem", fontWeight: 500 }}>
          Sorry, we could not find the page.
        </Typography>
        <Button variant="outlined" size="large" component={Link} to="/">
          Back to Home page
        </Button>
      </ErrorContainer>
    );
  }

  return (
    <ErrorContainer>
      <Typography
        variant="h2"
        sx={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}
      >
        There is an error...
      </Typography>
    </ErrorContainer>
  );
};

export default Error;
