import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export const CustomBreadcrumbs = () => {
  let location = useLocation();

  const { t } = useTranslation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  const link = location.pathname.split('/')[1];
  const pageName = link === 'users' ? 'employees' : link;

  return (
    // <div role="presentation" onClick={handleClick}>
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        sx={{ display: 'flex', alignItems: 'center' }}
        color="inherit"
        href={`/${link}`}
      >
        {t(`links.${pageName}`)}
      </Link>
      <Typography sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}>
        <PermIdentityIcon />
        Breadcrumb
      </Typography>
    </Breadcrumbs>
    // </div>
  );
};
