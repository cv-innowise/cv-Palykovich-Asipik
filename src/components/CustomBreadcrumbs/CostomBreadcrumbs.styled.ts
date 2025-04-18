import { styled } from '@mui/material/styles';
import { toRem } from '../../utils';
import { Breadcrumbs } from '@mui/material';

export const StyledBreadcrumbs = styled(Breadcrumbs)`
  /* width: 100%; */
  margin-left: ${toRem(20)};

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
