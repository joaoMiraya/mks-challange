import { createSlice } from '@reduxjs/toolkit';





const initialState = {
    showBar: false,
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setShowBar(state) {
            state.showBar = !state.showBar;
        },
    },
});

export const { setShowBar } = appSlice.actions;

export default appSlice.reducer;