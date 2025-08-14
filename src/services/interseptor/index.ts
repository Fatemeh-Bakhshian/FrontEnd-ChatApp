import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL as string;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (error: AxiosError) => {
  console.log(error);

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;