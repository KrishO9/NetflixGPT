import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState: {
        gptSearchView: false,
        movieResults :null,
        movieNames: null,
    },
    reducers: {
        toggleGptSearchView : (state) => {
            state.gptSearchView =  !state.gptSearchView;
        },
        addGptMovies: (state , action) => {
            const {movieNames , movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    },
});

export const { toggleGptSearchView  , addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;