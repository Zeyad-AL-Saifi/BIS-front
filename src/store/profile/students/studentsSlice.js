import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_URL } from "../../../Api/apiConfig";



const initialState = { records: [], loading: false, error: null, record: null };
const token = localStorage.getItem('token');

//for get all students 
export const getAllStudents = createAsyncThunk(
    "students/getallstudents",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(`${Base_URL}/students`);
            return res.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//add new students
export const registrationStudents = createAsyncThunk(
    "students/registrationstudents", async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;


        const { full_name, address, class_number, mobile_number, gender, date_of_birth, password, email, } = item;
        try {
            const res = await fetch(`${Base_URL}/registration/student`, {
                method: "POST",
                body: JSON.stringify({
                    "student_image": "dfsdfs",
                    full_name,
                    address,
                    mobile_number,
                    gender,
                    date_of_birth,
                    class_number,
                    password,
                    email,
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


//get students by id
export const getStudentsByID = createAsyncThunk(
    "students/getstudentsbyid", async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/students/${id}`, {
                method: "Get",
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


//update the students
export const updateStudents = createAsyncThunk(
    "students/updatestudents",
    async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${Base_URL}/students/${item.id_student}`, {
                method: "PUT",
                body: JSON.stringify({
                    full_name: item.full_name,
                    address: item.address,
                    date_of_birth: item.date_of_birth,
                    mobile_number: item.mobile_number,
                    class_number: item.class_number,
                    email: item.email,
                    student_image: "ss"

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


//delete students
export const deleteStudents = createAsyncThunk(
    "students/deletestudents", async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;

        try {
             await fetch(`${Base_URL}/students/${id}`,
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





const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        cleanRecord: (state) => { state.record = null }
    },
    extraReducers: (builder) => {
        //get the students
        builder.addCase(getAllStudents.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getAllStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(getAllStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //get students by id
        builder.addCase(getStudentsByID.pending, (state, action) => {
            state.loading = true;
            state.record = null;

            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getStudentsByID.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload;
        })
        builder.addCase(getStudentsByID.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //delete students
        builder.addCase(deleteStudents.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(deleteStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.records = state.records.filter(
                (el) => el.id_student !== action.payload
            );
        })
        builder.addCase(deleteStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //update the students
        builder.addCase(updateStudents.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(updateStudents.fulfilled, (state, action) => {

            state.record = action.payload;
            state.loading = false;
        })
        builder.addCase(updateStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // registration students
        builder.addCase(registrationStudents.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(registrationStudents.fulfilled, (state, action) => {
            state.loading = false;
            state.records.push(action.payload);
        })
        builder.addCase(registrationStudents.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default studentsSlice.reducer;