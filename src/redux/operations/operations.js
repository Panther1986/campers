import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66bc5b9424da2de7ff6a2e06.mockapi.io/api/v1";

export const fetchAllCars = createAsyncThunk(
  "api/camps",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/camps");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarOfId = createAsyncThunk(
  "api/detail",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/camps/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
