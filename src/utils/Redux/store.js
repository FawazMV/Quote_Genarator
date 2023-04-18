import { configureStore } from "@reduxjs/toolkit";
import Bookmark from "./Bookmark";
import RandomQuote from "./RandomQuote";
import TagsSlice from "./TagsSlice";
const store = configureStore({
    reducer: {
        quote: RandomQuote,
        bookmark: Bookmark,
        tags: TagsSlice
    }
});

export default store;