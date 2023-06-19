import { createSlice } from "@reduxjs/toolkit";
import { login, register, updateUserInfo } from "./asyncThunk";
import initialState from "./initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    //loading
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // register
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.user;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //update user
    builder.addCase(updateUserInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = { ...state.userInfo, ...action.payload };
    });
    builder.addCase(updateUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { login, register, updateUserInfo };
export const { logout } = authSlice.actions;
export default authSlice.reducer;
