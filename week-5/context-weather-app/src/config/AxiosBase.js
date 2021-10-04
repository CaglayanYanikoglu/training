import axios from "axios";
export const AxiosBase = axios.create({
  baseURL:`https://api.openweathermap.org/data/2.5`

})