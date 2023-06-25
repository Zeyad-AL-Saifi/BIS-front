import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_URL } from "../../../Api/apiConfig";



const initialState = { records: [], loading: false, error: null, record: null };
const token = localStorage.getItem('token');
//for get all teachers 
export const getAllteachers = createAsyncThunk(
    "teachers/getallteachers",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(`${Base_URL}/teachers`);
            return res.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//add new teacher
export const registrationTeacher = createAsyncThunk(
    "teachers/registrationTeacher", async (item, thunkAPI) => {
        const { rejectWithValue, } = thunkAPI;
        const { full_name, address, mobile_number, gender, major, password, email, is_admin, } = item;
        try {
            const res = await fetch(`${Base_URL}/registration/teacher`, {
                method: "POST",
                body: JSON.stringify({
                    "teacher_image": "dfsdfs",
                    full_name,
                    address,
                    mobile_number,
                    gender,
                    major,
                    password,
                    email,
                    is_admin,
                },),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": token

                }
            });

            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


//get teachers by id
export const getteachersByID = createAsyncThunk(
    "teachers/getteachersbyid", async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/teachers/${id}`, {
                method: "Get",
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


//update the teachers
export const updateteachers = createAsyncThunk(
    "teachers/updateteachers",
    async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/teachers/${item.teacher_id}`, {
                method: "PUT",
                body: JSON.stringify({
                    full_name: item.full_name,
                    address: item.address,
                    mobile_number: item.mobile_number,
                    major: item.major,
                    email: item.email,
                    is_admin: item.is_admin,

                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": token

                }

            });

            const data = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


//delete teachers
export const deleteteachers = createAsyncThunk(
    "teachers/deleteteachers", async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
            await fetch(`${Base_URL}/teachers/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "token": token


                    }
                }
            )

            return id;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })





const teachersSlice = createSlice({
    name: "teachers",
    initialState,
    reducers: {
        cleanRecord: (state) => { state.record = null }
    },
    extraReducers: (builder) => {
        //get the teachers
        builder.addCase(getAllteachers.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getAllteachers.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(getAllteachers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //get teachers by id
        builder.addCase(getteachersByID.pending, (state, action) => {
            state.loading = true;
            state.record = null;

            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getteachersByID.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload;
        })
        builder.addCase(getteachersByID.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //delete teachers
        builder.addCase(deleteteachers.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(deleteteachers.fulfilled, (state, action) => {
            state.loading = false;
            state.records = state.records.filter(
                (el) => el.teacher_id !== action.payload
            );
        })
        builder.addCase(deleteteachers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //update the teachers
        builder.addCase(updateteachers.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(updateteachers.fulfilled, (state, action) => {

            state.record = action.payload;
            state.loading = false;
        })
        builder.addCase(updateteachers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //add registration
        builder.addCase(registrationTeacher.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(registrationTeacher.fulfilled, (state, action) => {
            state.loading = false;
            state.records.push(action.payload);
        })
        builder.addCase(registrationTeacher.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default teachersSlice.reducer;