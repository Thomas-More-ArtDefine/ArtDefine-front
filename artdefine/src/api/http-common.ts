
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080",
  headers: {
    "Content-type": "application/json"
  }
});

export default api;
