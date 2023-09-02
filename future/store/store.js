import { configureStore } from "@reduxjs/toolkit";
import managerSlice from "../redux/managerSlice";
import messageSlice from "../redux/messageSlice";
import adminSlice from "../redux/adminSlice";
import authSlice from "../redux/authSlice";

export const store = configureStore({
  reducer: {
    auth:authSlice,
    admin:adminSlice,
    manager: managerSlice,
    message:messageSlice,
  },
});
