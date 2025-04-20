import { Container, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { toRem } from '../../utils';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${toRem(560)};
  padding: 0;
`;

export const StyledButton = styled(Button)`
  min-width: ${toRem(220)};
  border-radius: ${toRem(40)};
  margin-top: ${toRem(8)};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const StyledText = styled(Typography)`
  margin: ${toRem(24)} 0 ${toRem(40)};
`;
