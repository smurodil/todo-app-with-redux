import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "darkMode",
    initialState: false,
    reducers:{
        setTheme: (state, { payload }) => {
            return payload
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;