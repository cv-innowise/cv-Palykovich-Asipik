// themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeState = "light" | "dark" | "system";

interface ThemeSliceState {
  theme: ThemeState;
}

const savedTheme = localStorage.getItem("theme") as ThemeState | null;

const initialState: ThemeSliceState = {
  theme: savedTheme ? savedTheme : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload); 
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
