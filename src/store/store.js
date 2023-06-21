import { configureStore } from "@reduxjs/toolkit";

import maintext from './Home/main-text/mainTextSlice';
import news from './Home/news/newsSlice';
import homeimage from './Home/images/homeImageSlice';
import teachers from './profile/teachers/teachersSlice';

const store = configureStore({
    reducer: { maintext, news, homeimage, teachers }
})


export default store