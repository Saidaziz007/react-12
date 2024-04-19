import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
  name: "edited-user",
  initialState: {
    value: false,
  },
  reducers: {
    editUser: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { editUser } = editSlice.actions;
export default editSlice.reducer;
