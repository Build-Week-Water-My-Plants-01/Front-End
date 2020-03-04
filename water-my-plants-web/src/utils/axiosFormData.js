import axios from "axios";
// import { getToken } from "./axiosAuth.js";
export const axiosFormData = () => {
    const token = window.localStorage.getItem('token');

  return axios.create({
    baseURL: "https://water-my-plants-01.herokuapp.com/api/",
    headers: {
      "content-type": "multipart/form-data",
      Authorization: token
    }
  })


}
