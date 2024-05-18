
import axios from "axios";
const { REACT_APP_API_URL} = process.env;
const api = axios.create({
  baseURL: `http://${REACT_APP_API_URL}`,
  headers: {
    "Content-type": "application/json"
  }
});

export default api;
