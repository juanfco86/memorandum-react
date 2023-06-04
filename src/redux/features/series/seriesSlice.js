import { createSlice } from "@reduxjs/toolkit";

export const seriesSlice = createSlice({
    name: "series",
    initialState: {
        list: [],
        items: 20,
        loading: true,
        error: false
    },
    reducers: {
        setSeriesList: (state, action) => {
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

export const { setSeriesList, setLoadImages, setLoading, setError, setItemsPage } = seriesSlice.actions;

export default seriesSlice.reducer;