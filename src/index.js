import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/utils/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from "../src/store/store.js";
import { RouterProvider } from 'react-router-dom';
import router from './routers/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
