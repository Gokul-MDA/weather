import axios from "axios";
// import { config } from "process";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://api.weatherapi.com/v1";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.interceptors.request.use((config) => {
  config.params = {
    key: "399f647478d24ed2ac152401231803",
    ...config.params,
  };
  return config;
});

//All request will wait 2 seconds before timeout
// axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;
