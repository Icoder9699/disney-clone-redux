import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    recommends: null,
    disneys:    null,
    trendings:  null,
    originals:  null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommends = action.payload.recommends
            state.disneys    = action.payload.disneys
            state.trendings  = action.payload.trendings
            state.originals  = action.payload.originals
        },
    },
});

//  functional 

export const { setMovies } = movieSlice.actions;

//  state elements 
export const selectRecommend = state => state.movies.recommends;
export const selectDisneys    = state => state.movies.disneys;
export const selectTrendings = state => state.movies.trendings;
export const selectOriginals = state => state.movies.originals;


//  reducer 
export default movieSlice.reducer;


