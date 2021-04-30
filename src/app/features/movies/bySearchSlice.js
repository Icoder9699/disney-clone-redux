import { createSlice } from "@reduxjs/toolkit"

// slice 
const initialState = {
    movies: []
}


export const bySearchSlice = createSlice({
    name: 'bySearch',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.movies =  action.payload.movies
        },
        clearMovies: (state) => {
            state.movies = null
        }
    }
})

export const {getMovies, clearMovies} = bySearchSlice.actions;

export const selectMovies = state => state.bySearch.movies;

//  reducer 
export default bySearchSlice.reducer;