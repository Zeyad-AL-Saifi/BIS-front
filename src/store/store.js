import { configureStore } from "@reduxjs/toolkit";

import maintext from './Home/main-text/mainTextSlice';
import news from './Home/news/newsSlice';
import homeimage from './Home/images/homeImageSlice';
import teachers from './profile/teachers/teachersSlice';
import students from './profile/students/studentsSlice';
import studentnote from './notes/studentNotes/studentNotesSlice';
import teachernote from './notes/teacherNotes/teacherNotesSlice';
import auth from './auth/auth';
import password from './password/passwordSlice'

const store = configureStore({
    reducer: { maintext, news, homeimage, teachers, students, studentnote, teachernote, auth, password }
})


export default store