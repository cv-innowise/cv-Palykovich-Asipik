import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { toRem } from '../../utils';

export const StyledAuthBox = styled(Box)`
  width: 100%;

  && form {
    display: flex;
    flex-direction: column;
    gap: ${toRem(20)};
  }

  && button[type='submit'] {
    width: fit-content;
    min-width: ${toRem(220)};
    margin: ${toRem(40)} auto 0;
    border-radius: ${toRem(40)};
  }

  && input + div {
    margin-right: 10px;
  }
`;
