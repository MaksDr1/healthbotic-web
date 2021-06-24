const baseUrl = "https://saxion.niekv.dev";

// This is a list of all functions that make request to the API

//region CRUD

export async function GET(path: string) {
  const response = await fetch(baseUrl + path, {
    method: "GET",
  });

  const result = await response.json();
  //console.debug(result);
  return result.result;
}

export async function POST(path: string, data: any) {
  const response = await fetch(baseUrl + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.debug(result);
  return result.result;
}

//endregion CRUD

//region Authentication

export async function Register(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return POST("/nurse", { firstName, lastName, email, password });
}

export async function Login(email: string, password: string) {
  return POST("/login", { email, password });
}

//endregion Authentication

//region Patient

/**
 * Get patients index
 */
export async function GetPatients() {
  return GET("/patient");
}

/**
 * Get patient by id
 * @param id - target patient id
 */
export async function GetPatient(id: number) {
  return GET(`/patient/${id}`);
}

//endregion Patient

//region Medicine

export async function GetMedicines() {
  return GET("/medicine");
}

export async function GetMedicine(id: number) {
  return GET(`/medicine/${id}`);
}

export async function GetPersonMedicine(id: number) {
  return GET(`/pmedicine/pid/${id}`);
}

//endregion Medicine

//region Nurse

export function GetNurses() {
  return GET("/nurse");
}

export function GetNurse(id: number) {
  return GET(`/nurse/${id}`);
}

//endregion Nurse

//region Health data

/**
 * Get health data by patient id
 * @param id - patient id
 */
export function GetHealthData(id: number) {
  return GET(`/healthdata/pid/${id}`);
}

//endregion Health data
