import { createSlice } from '@reduxjs/toolkit'
const Bookmark = createSlice({
    name: 'bookmark',
    initialState: { quotes: [] },
    reducers: {
        addQuoteBookmark: (state, action) => {
            state.quotes.push(action.payload);
            console.log(state.quotes)
        },
        removeQuoteBookmark: (state, action) => {
            state.quotes = state.quotes.filter(quote => quote.id !== action.payload.id);
        },
    },
});


export const { addQuoteBookmark, removeQuoteBookmark } = Bookmark.actions
export default Bookmark.reducer
