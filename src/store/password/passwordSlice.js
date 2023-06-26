

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Base_URL } from "../../Api/apiConfig";
const initialState = {
    loading: false,
    error: null,
    accessToken: "",
    userInfo: {},
};


export const forgotThePassword = createAsyncThunk(
    "password/forgotThePassword", async (email, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const res = await fetch(`${Base_URL}/forgot-password`, {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });
            const data = await res.json();

            if (res.status !== 200) {
                return res.send({ message: "error" })
            } else {
            }
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const resetPassword = createAsyncThunk(

    "password/resetPassword", async (password, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}${window.location.pathname}`, {
                method: "put",
                body: JSON.stringify( {password} ),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });
            const data = await res.json();

            if (res.status !== 200) {
                throw new Error("Error add note");
            } else {
            }
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })



const passwordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //loading
        builder.addCase(forgotThePassword.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(forgotThePassword.fulfilled, (state, action) => {
            state.loading = false;
            state.accessToken = action.payload.token;
            state.userInfo = action.payload;
        })
        builder.addCase(forgotThePassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            alert('invalid email address');
        })


        builder.addCase(resetPassword.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(resetPassword.fulfilled, (state, action) => {

            state.record = action.payload;
            state.loading = false;
        })
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })



    },
});


export default passwordSlice.reducer;
