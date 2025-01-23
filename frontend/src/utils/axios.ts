import axios from "axios";

export default axios.create({
    baseURL: 'https://pollyglot-backend.azurewebsites.net/api',
    headers: {
        "Content-Type": "application/json"
    }
})