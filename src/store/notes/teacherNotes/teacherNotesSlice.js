import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { records: [], loading: false, error: null, record: null };
const token = localStorage.getItem('token');
//for get all teachernote
export const getAllTeacherNote = createAsyncThunk(
  "teachernote/getallteachernote",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:4500/teachernote`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add new teachernote
export const addTeacherNote = createAsyncThunk(
  "teachernote/addteachernote",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:4500/teachernote", {
        method: "POST",
        body: JSON.stringify({
          teacher_id_from: item.teacher_id_from,
          teacher_name_from: item.teacher_name_from,
          student_name_to: item.student_name_to,
          note_status_code: item.note_status_code,
          note: item.note,
          time: item.time,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (res.status !== 201) {
        alert("There is an error, try again later ")

        throw new Error("Error add note");
      };
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//get teachernote by id
export const getTeacherNoteByID = createAsyncThunk(
  "teachernote/getteachernotebyid",
  async (name, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:4500/teachernote/${name}`, {
        method: "Get",
      });
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update the teachernote
export const updateTeacherNote = createAsyncThunk(
  "teachernote/updateteachernote",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `http://localhost:4500/teachernote/${item.note_id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            token: token
            ,
          },
        }
      );
      if (res.status !== 201) {
        alert("There is an error, try again later ")

        throw new Error("Error update note");
      };
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//delete teachernote
export const deleteTeacherNote = createAsyncThunk(
  "teachernote/deleteteachernote",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`http://localhost:4500/teachernote/${id}`, {
        method: "DELETE",
     
      });
      if (res.status !== 201) {
        alert("There is an error, try again later ")

        throw new Error("Error delete note");
      };
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const teacherNoteSlice = createSlice({
  name: "teachernote",
  initialState,
  reducers: {
    cleanRecord: (state) => {
      state.record = null;
    },
  },
  extraReducers: (builder) => {
    //get the teachernote
    builder.addCase(getAllTeacherNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(getAllTeacherNote.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(getAllTeacherNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //get teachernote by id
    builder.addCase(getTeacherNoteByID.pending, (state, action) => {
      state.loading = true;
      state.record = null;

      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(getTeacherNoteByID.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(getTeacherNoteByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //delete teachernote
    builder.addCase(deleteTeacherNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(deleteTeacherNote.fulfilled, (state, action) => {
      state.loading = false;
      state.records = state.records.filter(
        (el) => el.id_student !== action.payload
      );
    });
    builder.addCase(deleteTeacherNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //update the teachernote
    builder.addCase(updateTeacherNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(updateTeacherNote.fulfilled, (state, action) => {
      state.record = action.payload;
      state.loading = false;
    });
    builder.addCase(updateTeacherNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // registration teachernote
    builder.addCase(addTeacherNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(addTeacherNote.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });
    builder.addCase(addTeacherNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default teacherNoteSlice.reducer;
