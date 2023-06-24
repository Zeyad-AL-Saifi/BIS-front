import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { records: [], loading: false, error: null, record: null };

//for get all studentnote
export const getAllStudentNote = createAsyncThunk(
  "studentnote/getallstudentnote",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:4500/studentnote`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//add new studentnote
export const addStudentNote = createAsyncThunk(
  "studentnote/addstudentnote",
  async (item, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // const { auth } = getState();
    // item.userId = auth.id;
    try {
      const res = await fetch("http://localhost:4500/studentnote", {
        method: "POST",
        body: JSON.stringify({
          student_id_from: item.student_id_from,
          student_name_from: item.student_name_from,
          teacher_name_to: item.teacher_name_to,
          note_status_code: item.note_status_code,
          note: item.note,
          time: item.time,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//get studentnote by id
export const getStudentNoteByID = createAsyncThunk(
  "studentnote/getstudentnotebyid",
  async (name, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:4500/studentnote/${name}`, {
        method: "Get",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update the studentnote
export const updateStudentNote = createAsyncThunk(
  "studentnote/updatestudentnote",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `http://localhost:4500/studentnote/${item.note_id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // token:
            // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNjg2ODQ4Nzk3fQ.lLbG9qyrbFMyKUl4JZO_bftFMVlpIFLsi7GhcCU7yCs",
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//delete studentnote
export const deleteStudentNote = createAsyncThunk(
  "studentnote/deletestudentnote",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // const { auth } = getState();
    // item.userId = auth.id;
    try {
      await fetch(`http://localhost:4500/studentnote/${id}`, {
        method: "DELETE",
        headers: {},
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const studentNoteSlice = createSlice({
  name: "studentnote",
  initialState,
  reducers: {
    cleanRecord: (state) => {
      state.record = null;
    },
  },
  extraReducers: (builder) => {
    //get the studentnote
    builder.addCase(getAllStudentNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(getAllStudentNote.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(getAllStudentNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //get studentnote by id
    builder.addCase(getStudentNoteByID.pending, (state, action) => {
      state.loading = true;
      state.record = null;

      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(getStudentNoteByID.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(getStudentNoteByID.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //delete studentnote
    builder.addCase(deleteStudentNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(deleteStudentNote.fulfilled, (state, action) => {
      state.loading = false;
      state.records = state.records.filter(
        (el) => el.id_student !== action.payload
      );
    });
    builder.addCase(deleteStudentNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //update the studentnote
    builder.addCase(updateStudentNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(updateStudentNote.fulfilled, (state, action) => {
      state.record = action.payload;
      state.loading = false;
    });
    builder.addCase(updateStudentNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // registration studentnote
    builder.addCase(addStudentNote.pending, (state, action) => {
      state.loading = true;
      //for if the users retry after the error
      state.error = null;
    });
    builder.addCase(addStudentNote.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });
    builder.addCase(addStudentNote.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default studentNoteSlice.reducer;
