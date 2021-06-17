import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetPatient, GetPatients } from "../utils/WebUtils";

export const getPatientsThunk = createAsyncThunk(
  "get/patients",
  async (_, thunkAPI) => {
    return await GetPatients();
  }
);

export const getPatientThunk = createAsyncThunk(
  "get/patient",
  async (id: number, thunkAPI) => {
    return await GetPatient(id);
  }
);
