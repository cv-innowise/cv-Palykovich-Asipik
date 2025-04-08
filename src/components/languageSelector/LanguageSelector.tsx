import { Select, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLanguage } from '../../features/language/languageSlice';
import { useTranslation } from 'react-i18next';
import { FormControlStyled } from './LanguageSelectorWrapper';
import i18n from '../../locales/i18n';

const LanguageSelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const languageState = useAppSelector((state) => state.languageState.language);
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLanguage = event.target.value as 'en' | 'de' | 'ru';
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <FormControlStyled variant="outlined">
      <InputLabel id="language-select-label">{t('language')}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={languageState}
        onChange={handleChange}
        label={t('language')}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
        <MenuItem value="ru">Русский</MenuItem>
      </Select>
    </FormControlStyled>
  );
};

export default LanguageSelector;
