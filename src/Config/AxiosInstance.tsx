import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'https://expleo-backend-springboot-production.up.railway.app',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default AxiosInstance;
