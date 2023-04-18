import Axios from "axios"
export const axios = Axios.create({
    baseURL: "https://api.quotable.io",
    headers: { 'Content-Type': 'application/json' }
})
