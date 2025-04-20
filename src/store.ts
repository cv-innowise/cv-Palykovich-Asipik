import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import languageReducer from './features/language/languageSlice';

export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    languageState: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
