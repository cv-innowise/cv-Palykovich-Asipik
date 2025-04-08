import React from 'react';
import { Select, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTheme } from '../../features/theme/themeSlice';
import { FormControlStyled } from './ThemeSelectorWrapper';
import { useTranslation } from 'react-i18next';

interface ThemeSelectorProps {
  children?: React.ReactNode;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const themeState = useAppSelector((state) => state.themeState.theme);
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(setTheme(event.target.value as 'light' | 'dark' | 'system'));
  };

  return (
    <>
      <FormControlStyled variant="outlined">
        <InputLabel id="theme-select-label">{t('theme.appearance')}</InputLabel>
        <Select
          labelId="theme-select-label"
          id="theme-select"
          value={themeState}
          onChange={handleChange}
          label={t('theme.appearance')}
        >
          <MenuItem value="light">{t('theme.light')}</MenuItem>
          <MenuItem value="dark">{t('theme.dark')}</MenuItem>
          <MenuItem value="system">{t('theme.system')}</MenuItem>
        </Select>
      </FormControlStyled>
      {children}
    </>
  );
};

export default ThemeSelector;
