const baseUrl = "https://cors-anywhere.herokuapp.com/http://saxion.niekv.dev";

export async function GET(path: string) {
  const response = await fetch(baseUrl + path, {
    method: "GET",
  });

  const result = await response.json();
  //console.debug(result);
  return result;
}

export async function GetPatients() {
  return GET("/patient");
}

export async function GetPatient(id: number) {
  return GET(`/patient/${id}`);
}
