import { configureStore } from "@reduxjs/toolkit";

import maintext from './Home/main-text/mainTextSlice';

 const store = configureStore({
    reducer: { maintext }
})


export default store