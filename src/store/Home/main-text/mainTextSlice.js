import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = { records: [], loading: false, error: null, record: null };

//for get the text 
export const getMainText = createAsyncThunk(
    "maintext/getmaintext",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(`http://localhost:4500/home/text`);
            return res.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//frot update the text
export const updateMainText = createAsyncThunk(
    "maintext/updatemaintext",
    async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`http://localhost:4500/home/text`, {
                method: "PUT",
                body: JSON.stringify(item),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNjg2ODQ4Nzk3fQ.lLbG9qyrbFMyKUl4JZO_bftFMVlpIFLsi7GhcCU7yCs"
                }

            });

            const data = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const mainTextSlice = createSlice({
    name: "maintext",
    initialState,
    reducers: {
        cleanRecord: (state) => { state.record = null }
    },
    extraReducers: (builder) => {
        //get the text
        builder.addCase(getMainText.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getMainText.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(getMainText.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //update the text
        builder.addCase(updateMainText.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(updateMainText.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(updateMainText.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default mainTextSlice.reducer;