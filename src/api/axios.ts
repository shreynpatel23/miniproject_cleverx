import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
console.log(axios.defaults.baseURL);
export function createProject(data: any) {
  console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post("/project", data);
      return resolve(response.data);
    } catch (error) {
      return reject(error);
    }
  });
}

export function getProjects() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get("/project");
      return resolve(response.data);
    } catch (error) {
      return reject(error);
    }
  });
}
