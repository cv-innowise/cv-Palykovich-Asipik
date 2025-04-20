import { Container, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { toRem } from '../../utils';

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  padding: 0;
`;

export const CustomButton = styled(Button)`
  min-width: ${toRem(220)};
  border-radius: ${toRem(40)};
  margin-top: ${toRem(8)};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const TextStyled = styled(Typography)`
  margin: ${toRem(24)} 0 ${toRem(40)};
`;
