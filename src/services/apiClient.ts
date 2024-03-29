import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 7_000,
});

export default instance;
