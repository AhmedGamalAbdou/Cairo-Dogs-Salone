import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
const initialState = {
  userInfo: [],
  isLoggedIn: false,
};

export const registerUser = createAsyncThunk("auth/register", async (user) => {
  const addUserRef = await addDoc(collection(db, "users"), user);
  const newUser = { id: addUserRef.id, user };
  return newUser;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    });
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
