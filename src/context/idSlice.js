import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
  name: "id",
  initialState: {
    value: 0,
  },
  reducers: {
    getId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getId } = idSlice.actions;
export default idSlice.reducer;
