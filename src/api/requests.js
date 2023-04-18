import { axios } from "./axiosInstance"

export const getRandomQuote = async () => {
    try {
        const response = await axios.get('/random')
        return response
    } catch (error) {
        return error?.response
    }
}