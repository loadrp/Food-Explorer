import axios from "axios";

export const api = axios.create({
  // baseURL:"https://food-explorer-api-lucas.onrender.com",
 baseURL:"http://localhost:3333",
  
})