import axios from "axios";

const MOCKAPI_BASE = "https://66c6ff23732bf1b79fa4e916.mockapi.io/api/v1";

const axiosInstance = axios.create({
  baseURL: MOCKAPI_BASE,
});

export default axiosInstance;
