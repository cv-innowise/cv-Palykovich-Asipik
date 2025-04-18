import Typography from '@mui/material/Typography';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MuiLink from '@mui/material/Link';
import { StyledBreadcrumbs } from './CostomBreadcrumbs.styled';

export const CustomBreadcrumbs = () => {
  let location = useLocation();

  const { t } = useTranslation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return (
      <StyledBreadcrumbs aria-label="breadcrumb" separator=">" sx={{ mb: 2 }}>
        <Typography sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}>
          {t('links.home')}
        </Typography>
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs aria-label="breadcrumb" separator=">">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = value === 'users' ? 'employees' : value;
        const translatedName = t(`links.${displayName}`, { defaultValue: displayName });
        const isUserSegment = value === 'users' || (index > 0 && pathnames[index - 1] === 'users');

        return last ? (
          <Typography
            key={to}
            sx={{
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {isUserSegment && pathnames.length > 1 && <PermIdentityIcon sx={{ mr: 0.5 }} />}
            {translatedName}
          </Typography>
        ) : (
          <MuiLink
            key={to}
            component={RouterLink}
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              '&:hover': { color: 'primary.main' },
            }}
            color="inherit"
            to={to}
            aria-label={translatedName}
          >
            {translatedName}
          </MuiLink>
        );
      })}
    </StyledBreadcrumbs>
  );
};
