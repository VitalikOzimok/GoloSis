//Этот код создает и экспортирует экземпляр Axios, настроенный для выполнения HTTP-запросов.
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
