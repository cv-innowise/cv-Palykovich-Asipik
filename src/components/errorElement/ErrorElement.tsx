import { useRouteError } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";


const ErrorContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--red);
`;

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <ErrorContainer>
      <Typography variant="h3" align="center" fontWeight="bold">
        There is an error...
      </Typography>
    </ErrorContainer>
  );
};

export default ErrorElement;
