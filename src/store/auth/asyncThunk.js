import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const { email, password } = userInfo;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      delete data.user.id;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { firstName, lastName, email, password } = userInfo;

    try {
      const { data } = await axios.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });

      delete data.user.id;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (userInfo, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    const { firstName, lastName } = userInfo;

    try {
      //get id

      const { data } = await axios.get(`/users?email=${auth.userInfo.email}`);
      const userFullInfo = data[0];
      await axios.patch(
        `/660/users/${userFullInfo.id}`,
        {
          firstName,
          lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      return { firstName, lastName };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
