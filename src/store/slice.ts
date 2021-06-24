import {
  createSelector,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  getPatientsThunk,
  getPatientThunk,
  initializeData,
  loginThunk,
  registerThunk,
} from "./thunks";

export interface IMedicine {
  time: Date;
  unti: Date;
  from: Date;
}

export interface IPatient {
  id: number;
  name: string;
  lastName: string;
  dateOfBirth: Date;
  bsn: number;
  uid: number;

  medicine: IMedicine[];
}

export interface IUser {
  id: number;
  name: string;
  password: string;
  email: string;

  patients: IPatient[];
}

export interface IHealthBotic {
  users: IUser[];
  loggedInUserId?: number;
  selectedPatientId?: number;
  infoSelected: boolean;
  selectedMedicineId?: number;
}

const localStorageUsers =
  JSON.parse(window.localStorage.getItem("users") as string) ?? ([] as IUser[]);

//console.log(localStorageUsers);

const initialState: IHealthBotic = {
  users: [],
  infoSelected: false,
};

let idCounter = 0;

const healthBoticSlice = createSlice({
  name: "health-botic",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<Omit<IUser, "id" | "patients">>) {
      console.log(action);

      const user = action.payload as IUser;
      user.id = idCounter++;
      user.patients = [];

      state.users.push(user);

      console.log(current(state.users));
      window.localStorage.setItem("users", JSON.stringify(state.users));
    },

    tryLogin(state, action: PayloadAction<Pick<IUser, "name" | "password">>) {
      const user = state.users.find(
        (u) =>
          u.name === action.payload.name &&
          u.password === action.payload.password
      );

      if (user != null) {
        state.loggedInUserId = user.id;
      }
    },

    selectPatient(state, action: PayloadAction<number>) {
      state.selectedPatientId = action.payload;
    },

    selectMedicine(state, action: PayloadAction<number>) {
      state.selectedMedicineId = action.payload;
    },

    selectInfo(state) {
      state.infoSelected = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getPatientsThunk.pending, (state, action) => {
        const patients = action.payload;
        console.debug(patients);

        // TODO add patients to state
      })
      .addCase(getPatientThunk.fulfilled, (state, action) => {
        const patient = action.payload;
        console.debug(patient);

        const examplePatient = {
          id: 0,
          firstName: "asd",
          lastName: "asdasd",
          gender: 5,
          dateOfBirth: "sdasda",
          bsn: 23423,
        };

        const myPatient: IPatient = {
          id: examplePatient.id,
          name: examplePatient.firstName,
          lastName: examplePatient.lastName,
          dateOfBirth: new Date(examplePatient.dateOfBirth),
          bsn: examplePatient.bsn,
          uid: 0,

          medicine: [],
        };

        // TODO add patients to state
      })
      .addCase(initializeData.fulfilled, (state, action) => {
        const data = action.payload;

        console.debug(data);

        const convertedNurses: IUser[] = data.nurses.map((n: any) => ({
          id: n.id,
          name: n.firstName,
          email: n.lastName,
          password: "NOT-USED",

          patients: [],
        }));

        console.debug(convertedNurses);

        state.users = convertedNurses;

        /*const convertetPatients: IPatient[] = data.patients.map(p => ({
          id: p.id,
          name: p.firstName,
          lastName: p.lastName,
          dateOfBirth: new Date(p.dateOfBirth),
          bsn: p.bsn,
          uid: 0,

          medicine: [],
        }))*/
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        const data = action.payload;
        const converted = {
          id: data.id,
          name: data.firstName,
          email: data.lastName,
          password: "NOT-USED",

          patients: [],
        };

        state.users.push(converted);
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        //
        const { loginData, patients } = action.payload;

        state.loggedInUserId = loginData.id;

        if (loginData.id === 2) {
          console.debug("adasdadasad");
          state.users
            .find((u) => u.id === loginData.id)
            ?.patients.push({
              id: 0,
              name: "John",
              lastName: "Super",
              uid: 5,
              dateOfBirth: new Date(),
              bsn: 23423,
              medicine: [],
            });
        }

        if (loginData.id === 3) {
          state.users
            .find((u) => u.id === loginData.id)
            ?.patients.push({
              id: 0,
              name: "Max",
              lastName: "Best",
              uid: 5,
              dateOfBirth: new Date(),
              bsn: 23423,
              medicine: [],
            });
        }
      }),
});

export const { addUser, tryLogin, selectPatient, selectMedicine, selectInfo } =
  healthBoticSlice.actions;
export const healthBoticReducer = healthBoticSlice.reducer;

export const usersSelector = (state: IHealthBotic) => state.users;
export const userSelector = (id: number) =>
  createSelector(usersSelector, (users) => users.find((u) => u.id === id));

export const loggedInUserIdSelector = (state: IHealthBotic) =>
  state.loggedInUserId;

export const loggedInUserSelector = createSelector(
  usersSelector,
  loggedInUserIdSelector,
  (users, id) => users.find((u) => u.id === id)
);

export const loggedInUserNameSelector = createSelector(
  loggedInUserSelector,
  (user) => user?.name
);

export const loggedInUserPatientsSelector = createSelector(
  loggedInUserSelector,
  (user) => user?.patients
);

export const selectedPatientIdSelector = (state: IHealthBotic) =>
  state.selectedPatientId;

export const selectedPatientSelector = createSelector(
  loggedInUserPatientsSelector,
  selectedPatientIdSelector,
  (patients, id) => patients?.find((p) => p.id === id)
);

export const selectedPatientNameSelector = createSelector(
  selectedPatientSelector,
  (p) => p?.name
);
export const selectedPatientBsnSelector = createSelector(
  selectedPatientSelector,
  (p) => p?.bsn
);
export const selectedPatientBirthSelector = createSelector(
  selectedPatientSelector,
  (p) => p?.dateOfBirth
);
