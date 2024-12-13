import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        isMenueOpen: true
    },
    reducers: {
        toggleMenue: (state) => {
            state.isMenueOpen = !state.isMenueOpen
        },
        closeMenue: (state) => {
            state.isMenueOpen = false
        }
    }
})

export const { toggleMenue, closeMenue } = AppSlice.actions

export default AppSlice.reducer;