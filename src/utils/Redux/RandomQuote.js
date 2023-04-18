import { createSlice } from '@reduxjs/toolkit'
const RandomQuote = createSlice({
    name: 'quote',
    initialState: {
        id: null,
        content: null,
        author: null
    },
    reducers: {
        setQuote: (state, action) => {
            state.id = action.payload.id
            state.content = action.payload.content
            state.author = action.payload.author
        },
        removeQuote: (state) => {
            state.id=null
            state.author = null;
            state.content = null;
        }
    }

})

export const { setQuote, removeQuote } = RandomQuote.actions
export default RandomQuote.reducer
