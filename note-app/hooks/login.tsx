'use server'
import axios from "axios"
import { body } from "./signup"

export async function useLogin(formData:FormData) {
    const url = process.env.APP_URL 

    const { data } = await axios.post(`${url}/auth/login`, formData)
    
    return data
}