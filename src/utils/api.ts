import axios from "axios";
import { API_URL } from "../utils/env-local";

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token'); // Obtenha o token do localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

export default api;