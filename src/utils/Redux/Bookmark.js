import { createSlice } from '@reduxjs/toolkit';

const BOOKMARK_STORAGE_KEY = 'bookmark';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(BOOKMARK_STORAGE_KEY);
        if (serializedState === null) {
            return { quotes: [] };
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return { quotes: [] };
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(BOOKMARK_STORAGE_KEY, serializedState);
    } catch (error) {
        console.error('Error saving bookmark state', error);
    }
};

const Bookmark = createSlice({
    name: 'bookmark',
    initialState: loadState(),
    reducers: {
        addQuoteBookmark: (state, action) => {
            state.quotes.push(action.payload);
            saveState(state);
        },
        removeQuoteBookmark: (state, action) => {
            state.quotes = state.quotes.filter((quote) => quote.id !== action.payload.id);
            saveState(state);
        },
    },
});

export const { addQuoteBookmark, removeQuoteBookmark } = Bookmark.actions;
export default Bookmark.reducer;
