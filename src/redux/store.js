import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import bookingSlice from "./slices/bookingSlice";
import msgSlice from "./slices/msgSlice";

export const store = configureStore({
  reducer: { auth: authSlice, booking: bookingSlice, msg: msgSlice },
});

export default store;
