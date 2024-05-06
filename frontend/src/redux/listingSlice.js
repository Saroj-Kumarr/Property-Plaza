import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
    name: "listing",
    initialState: {
        currentListing: null,
    },
    reducers: {
        setListing: (state, action) => {
        state.currentListing = action.payload;
        },
        updateListing: (state, action) => {
        state.currentListing = action.payload;
        },
        deleteListing: (state) => {
        state.currentListing = null;
        },
    },
});
    
export const { setListing, updateListing, deleteListing } = listingSlice.actions;
export default listingSlice.reducer;