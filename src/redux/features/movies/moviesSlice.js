import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        list: [],
        items: 20,
        loading: true,
        error: false
    },
    reducers: {
        setMoviesList: (state, action) => {
            state.list = action.payload;
        },
        setItemsPage: (state, action) => {
            state.items = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setMoviesList, setLoadImages, setLoading, setError, setItemsPage } = moviesSlice.actions;

export default moviesSlice.reducer;