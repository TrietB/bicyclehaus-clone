import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
    baseURL: BASE_URL
})

apiService.interceptors.request.use(
    (request) => {
        console.log("Start Request" , request)
        return request
    },
    (err) => {
        console.log("REQUEST ERROR", {err})
        return Promise.reject(err)
    }
)

apiService.interceptors.response.use(
    (response) => {
        console.log("RESPONSE", response)
        return response
    },
    (err) => {
        console.log("RESPONSE ERR" , {err})
        const message = err.response?.data?.errors?.message || 'Unknown error'
        return Promise.reject({message})
    }
)

export default apiService
