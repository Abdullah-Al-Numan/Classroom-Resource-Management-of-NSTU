import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    mode: "cors"
})

export default instance;