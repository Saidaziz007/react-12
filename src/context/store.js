import { configureStore } from "@reduxjs/toolkit";
import usersSlice, { addToUsers } from "./usersSlice";
import editSlice from "./editSlice";
import idSlice from "./idSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    edit: editSlice,
    id: idSlice,
  },
});
