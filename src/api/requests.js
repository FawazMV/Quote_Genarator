import { axios } from "./axiosInstance"

export const getRandomQuote = async () => {
    try {
        const response = await axios.get('/random')
        return response
    } catch (error) {
        return error?.response
    }
}

export const getTags = async () => {
    try {
        const response = await axios.get('/tags')
        return response
    } catch (error) {
        return error?.response
    }
}

export const getRandomQuoteWithTags = async (tags) => {
    try {
        const response = await axios.get(`/random?tags=${tags}`)
        return response
    } catch (error) {
        return error?.response
    }
}