import axios from "axios";

export const api = axios.create({
  /*baseURL:"https://rocket-notes-api-explorer.onrender.com",*/
  baseURL:"http://localhost:3333/",
  
})