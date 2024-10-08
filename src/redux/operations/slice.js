import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarOfId } from "./operations.js";

const initialState = {
  allItems: [],
  item: [],
  loading: false,
  error: false,
  openModal: false,
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
        state.item = initialState.item;
        state.openModal = false;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.allItems = action.payload;
        state.item = initialState.item;
        state.openModal = false;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.allItems = initialState.allItems;
        state.item = initialState.item;
        state.openModal = false;
      })
      .addCase(fetchCarOfId.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.item = initialState.item;
        state.openModal = false;
      })
      .addCase(fetchCarOfId.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const itemExists = state.item.find(
          (item) => item.id === action.payload.id
        );
        if (!itemExists) {
          state.item = [...state.item, action.payload];
        }
        state.openModal = true;
      })
      .addCase(fetchCarOfId.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.item = initialState.item;
        state.openModal = false;
      }),
});

export const campersReduser = campsSlice.reducer;
