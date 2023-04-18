import { configureStore } from "@reduxjs/toolkit";
import RandomQuote from "./RandomQuote";
const store = configureStore({
    reducer: {
        quote: RandomQuote 
    }
});

export default store;