import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET,
  GetHealthData,
  GetMedicine,
  GetMedicines,
  GetNurse,
  GetNurses,
  GetPatient,
  GetPatients,
  Login,
  Register,
} from "../utils/WebUtils";
import { IHealthBotic } from "./slice";

export const registerThunk = createAsyncThunk(
  "register",
  async (
    arg: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    return await Register(arg.firstName, arg.lastName, arg.email, arg.password);
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (
    arg: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const loginData = await Login(arg.email, arg.password);
    const patientsIds =
      loginData.id != null ? await GET("/pnurse/nid/" + loginData.id) : [];

    const patients = await Promise.all(
      patientsIds.map((id: any) => GetPatient(id))
    );

    return { loginData, patients };
  }
);

// This is a list of all (redux)actions that get data from the API

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

export const initializeData = createAsyncThunk(
  "initializeData",
  async (_, thunkAPI) => {
    // Get all patients X
    const patientsIndex = await GetPatients();
    const patientIds = patientsIndex.map((p: any) => p.id);
    const patients = await Promise.all(
      patientIds.map((id: any) => GetPatient(id))
    );

    // Get all Healthdata X
    const healthData = await Promise.all(
      patientIds.map((id: any) => GetHealthData(id))
    );

    // Get all nurses X
    const nursesIndex = await GetNurses();
    const nurseIds = nursesIndex.map((p: any) => p.id);
    const nursesNested = await Promise.all(
      nurseIds.map((id: any) => GetNurse(id))
    );
    const nurses = nursesNested.flatMap((n) => n);

    // Get all person medicines X
    const personMedicines = await Promise.all(
      patientIds.map((id: any) => GetHealthData(id))
    );

    // Get all medicines X
    const madicineIndex = await GetMedicines();
    const medicineIds = madicineIndex.map((p: any) => p.id);
    const medicine = await Promise.all(
      medicineIds.map((id: any) => GetMedicine(id))
    );

    return { patients, medicine, nurses, healthData, personMedicines };
  }
);
