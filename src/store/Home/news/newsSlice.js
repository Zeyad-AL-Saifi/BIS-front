import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = { records: [], loading: false, error: null, record: null };

//for get all news 
export const getAllNews = createAsyncThunk(
    "news/getallnews",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get(`http://localhost:4500/home/news`);
            return res.data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//get news by id
export const getNewsByID = createAsyncThunk(
    "news/getnewsbyid", async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`http://localhost:4500/home/news/${id}`, {
                method: "Get",
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


//update the news
export const updateNews = createAsyncThunk(
    "news/updatenews",
    async (item, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`http://localhost:4500/home/news/${item.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    title: item.title,
                    content: item.content
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNjg2ODQ4Nzk3fQ.lLbG9qyrbFMyKUl4JZO_bftFMVlpIFLsi7GhcCU7yCs"
                }

            });

            const data = await res.json();
            return data;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//post news
export const addNews = createAsyncThunk(
    "news/addnews", async (item, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        // const { auth } = getState();
        // item.userId = auth.id;
        try {
            const res = await fetch("http://localhost:4500/home/news", {
                method: "POST",
                body: JSON.stringify({
                    title: item.titleData,
                    content: item.contentData
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNjg2ODQ4Nzk3fQ.lLbG9qyrbFMyKUl4JZO_bftFMVlpIFLsi7GhcCU7yCs"

                }
            });
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


//delete news
export const deleteNews = createAsyncThunk(
    "news/deletenews", async (id, thunkAPI) => {
        const { rejectWithValue, getState } = thunkAPI;
        // const { auth } = getState();
        // item.userId = auth.id;
        try {
            await fetch(`http://localhost:4500/home/news/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNjg2ODQ4Nzk3fQ.lLbG9qyrbFMyKUl4JZO_bftFMVlpIFLsi7GhcCU7yCs"

                    }
                }
            )
            return id;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })





const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        cleanRecord: (state) => { state.record = null }
    },
    extraReducers: (builder) => {
        //get the text
        builder.addCase(getAllNews.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getAllNews.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
        })
        builder.addCase(getAllNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //get news by id
        builder.addCase(getNewsByID.pending, (state, action) => {
            state.loading = true;
            state.record = null;

            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(getNewsByID.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload;
        })
        builder.addCase(getNewsByID.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //add news
        builder.addCase(addNews.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(addNews.fulfilled, (state, action) => {
            state.loading = false;
            state.records.push(action.payload);
        })
        builder.addCase(addNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //delete news
        builder.addCase(deleteNews.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(deleteNews.fulfilled, (state, action) => {
            state.loading = false;
            state.records = state.records.filter(
                (el) => el.news_id !== action.payload
            );
        })
        builder.addCase(deleteNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


        //update the news
        builder.addCase(updateNews.pending, (state, action) => {
            state.loading = true;
            //for if the users retry after the error 
            state.error = null;
        })
        builder.addCase(updateNews.fulfilled, (state, action) => {

            state.record = action.payload;
            state.loading = false;
        })
        builder.addCase(updateNews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default newsSlice.reducer;