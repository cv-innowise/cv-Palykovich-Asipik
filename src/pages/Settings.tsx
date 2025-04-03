import { ThemeSelector } from '../components';
import { useTheme } from '@mui/material';
import { LanguageSelector } from '../components';
import { useTranslation } from 'react-i18next';
import Wrapper from '../wrappers/SettingsWrapper';

const Settings = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="title" style={{ color: theme.palette.text.secondary }}>
        {t('pageTitle.settings')}
      </div>
      <div className="selectContainer">
        <ThemeSelector />
      </div>
      <div className="selectContainer">
        <LanguageSelector />
      </div>
    </Wrapper>
  );
};

export default Settings;
