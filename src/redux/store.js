import { configureStore } from "@reduxjs/toolkit"
import seriesSlice from "./features/series/seriesSlice"
import moviesSlice from "./features/movies/moviesSlice"

export default configureStore({
    reducer: {
        seriesSlice,
        moviesSlice
    }
})