import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
const initialState = {
  currentUser: null,
  loading: false,
};
export const registerUser = createAsyncThunk("auth/register", async (user) => {
  const addUserRef = await addDoc(collection(db, "users"), user);
  const newUser = { id: addUserRef.id, user };
  return newUser;
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.loading = true;
    });
  },
});

export default authSlice.reducer;
