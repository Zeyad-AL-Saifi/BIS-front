import { configureStore } from "@reduxjs/toolkit";

import maintext from './Home/main-text/mainTextSlice';
import news from './Home/news/newsSlice';
import homeimage from './Home/images/homeImageSlice';

const store = configureStore({
    reducer: { maintext, news ,homeimage}
})


export default store