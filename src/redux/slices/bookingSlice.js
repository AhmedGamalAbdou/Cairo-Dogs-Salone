import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
const initialState = {
  bookingList: [],
  loading: false,
};
export const createABooking = createAsyncThunk(
  "auth/register",
  async (booking) => {
    const addUserRef = await addDoc(collection(db, "bookings"), booking);
    const newUser = { id: addUserRef.id, booking };
    return newUser;
  }
);
export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createABooking.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = true;
    });
  },
});

export default bookingSlice.reducer;
