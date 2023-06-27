import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Base_URL } from "../../../Api/apiConfig";



const initialState = { records: [], loading: false, error: null, record: null };
const token = localStorage.getItem('token');
//for get all homeimage 
export const getAllHomeImage = createAsyncThunk(
    "homeimage/getallhomeimage",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/home/images`);
            const data = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//get homeimage by id
export const getHomeImageById = createAsyncThunk(
    "homeimage/gethomeimagebyid", async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/home/images/${id}`, {
                method: "Get",
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })




//post homeimage
export const addNewImage = createAsyncThunk(
    "homeimage/addnewimage", async (file, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            const formData = new FormData();
            formData.append('image', file, file.name);
            const res = await fetch(`${Base_URL}/home/images`, {
                method: "POST",
                body: formData,
                headers: {
                    "token": token


                }
            });
            if (res.status !== 201) {

                throw new Error("Error add image");
            };
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


//delete homeimage
export const deleteImage = createAsyncThunk(
    "homeimage/deleteimage", async (id, thunkAPI) => {
        const { rejectWithValue, } = thunkAPI;

        try {
            const res = await fetch(`${Base_URL}/home/images/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "token": token


                    }
                }
            )
            if (res.status !== 201) {

                throw new Error("Error delete image");
            };
            return id;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })





const homeImageSlice = createSlice({
    name: "homeimage",
    initialState,
    reducers: {
        cleanRecord: (state) => { state.record = null }
    },
    extraReducers: (builder) => {
        //get the text
        builder.addCase(getAllHomeImage.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getAllHomeImage.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(getAllHomeImage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //get news by id
        builder.addCase(getHomeImageById.pending, (state, action) => {
            state.loading = true;
            state.record = null;

            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getHomeImageById.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload;
        })
        builder.addCase(getHomeImageById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //add news
        builder.addCase(addNewImage.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(addNewImage.fulfilled, (state, action) => {
            state.loading = false;
            state.records.push(action.payload);
        })
        builder.addCase(addNewImage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //delete news
        builder.addCase(deleteImage.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(deleteImage.fulfilled, (state, action) => {
            state.loading = false;
            state.records = state.records.filter(
                (el) => el.image_id !== action.payload
            );
        })
        builder.addCase(deleteImage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default homeImageSlice.reducer;