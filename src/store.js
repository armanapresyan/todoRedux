import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlicer";

const store = configureStore({
    reducer : {
        todo : todoSlice
    }
})


export default store