import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from './hooks/hooks.ts';
import { darkTheme, lightTheme } from './utils';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n.ts';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/auth/сlient.ts';

export const Root = () => {
  const theme = useAppSelector((state) => state.themeState.theme);
  const currentTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  </Provider>
);
