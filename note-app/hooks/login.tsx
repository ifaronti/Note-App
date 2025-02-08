'use server'
import axios from "axios"

export type loginres = {
    access_token: string
    success: boolean
    token_type:string
}


export async function useLogin(formData:FormData) {
    const url = process.env.APP_URL 
    const { data } = await axios.post<loginres>(`${url}/auth/login`, formData)

    return data

}