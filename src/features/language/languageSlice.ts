import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LanguageState = "en" | "de" | "ru";

interface LanguageSliceState {
  language: LanguageState;
}

const savedLanguage = localStorage.getItem("language") as LanguageState | null;

const initialState: LanguageSliceState = {
  language: savedLanguage ? savedLanguage : "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LanguageState>) {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;