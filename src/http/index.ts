import axios, { AxiosInstance } from "axios";

const clienthttp: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/"
});

export default clienthttp