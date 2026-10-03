import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "search",
  initialState: { open: false, query: "" },
  reducers: {
    openSearch: (state) => { state.open = true; },
    closeSearch: (state) => { state.open = false; state.query = ""; },
    setQuery: (state, action: PayloadAction<string>) => { state.query = action.payload; },
  },
});

export const { openSearch, closeSearch, setQuery } = slice.actions;
export default slice.reducer;
