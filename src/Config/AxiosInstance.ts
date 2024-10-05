import axios from 'axios';
// @ts-ignore
import {BASE_URL} from "@env";

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AxiosInstance;
