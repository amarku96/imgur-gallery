import { createSlice } from '@reduxjs/toolkit';

const gallerySliceReducer = createSlice({
    name: 'gallery',
    initialState: {
        loading: false,
        items: [],
        section: 'top',
        sort: 'week',
        page: 1,
        window: 'top',
        showViral: true
    },
    reducers: {
        setSection: (state, action) => {
            state.section = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setWindow: (state, action) => {
            state.window = action.payload;
        },
        setViral: (state, action) => {
            state.showViral = action.payload;
        },
    },
});

export const { setSection, setSort, setWindow, setPage, setViral } = gallerySliceReducer.actions;

export default gallerySliceReducer.reducer;
