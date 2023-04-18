import { createSlice } from '@reduxjs/toolkit'
const TagsSlice = createSlice({
    name: 'tags',
    initialState: {
        slugs: null
    },
    reducers: {
        setTagsSlice: (state, action) => {
            state.slugs = action.payload.slugs
        },
    }

})

export const { setTagsSlice } = TagsSlice.actions
export default TagsSlice.reducer
