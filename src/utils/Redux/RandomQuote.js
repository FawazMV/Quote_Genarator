import { createSlice } from '@reduxjs/toolkit'
const RandomQuote = createSlice({
    name: 'quote',
    initialState: {
        quote: null,
        author: null
    },
    reducers: {
        setQuote: (state, action) => {
            state.quote = action.payload.quote
            state.author = action.payload.author
        },
        removeQuote: (state) => {
            state.author = null;
            state.quote = null;
        }
    }

})

export const { setQuote, removeQuote } = RandomQuote.actions
export default RandomQuote.reducer
