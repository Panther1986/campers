import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarOfId } from "./operations.js";

const initialState = {
  allItems: [],
  item: [],
  loading: false,
  error: false,
};

const campsSlice = createSlice({
  name: "camps",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCars.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.allItems = initialState.allItems;
        state.item = [];
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.allItems = action.payload;
        state.item = [];
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.allItems = initialState.allItems;
        state.item = [];
      })
      .addCase(fetchCarOfId.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.item = initialState.item;
      })
      .addCase(fetchCarOfId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.item = action.payload;
      })
      .addCase(fetchCarOfId.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.item = initialState.item;
      }),
});

export const campersReduser = campsSlice.reducer;
