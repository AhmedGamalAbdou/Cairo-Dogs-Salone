import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";
const initialState = {
  msgs: [],
  loading: false,
};
export const createMsg = createAsyncThunk("msg/createMsg", async (msg) => {
  const addMsgRef = await addDoc(collection(db, "msgs"), msg);
  const newUser = { id: addMsgRef.id, msg };
  return newUser;
});
export const msgSlice = createSlice({
  name: "msg",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMsg.fulfilled, (state, action) => {
      state.msgs = action.payload;
      state.loading = true;
    });
  },
});

export default msgSlice.reducer;
