import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "user name",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
