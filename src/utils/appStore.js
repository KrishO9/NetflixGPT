import { configureStore } from "@reduxjs/toolkit"
import UserReducer from "./UserSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice"
import configReducer from "./LanguageSlice"
const appStore =  configureStore({
    reducer:{
        user : UserReducer,
        movies : moviesReducer,
        gpt : gptReducer,
        config : configReducer,
    },
});


export default appStore;