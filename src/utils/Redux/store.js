import { configureStore } from "@reduxjs/toolkit";
import Bookmark from "./Bookmark";
import RandomQuote from "./RandomQuote";
const store = configureStore({
    reducer: {
        quote: RandomQuote ,
        bookmark:Bookmark
    }
});

export default store;