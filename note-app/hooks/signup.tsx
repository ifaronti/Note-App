"use server"

import axios from "axios"

export type body = {
    email: string
    password:string
}

export type signupRes = {
    success: boolean
    message:string
}

export async function register(body:body) {
    const url = process.env.APP_URL

    const { data } = await axios.post<signupRes>(`${url}/auth/signup`, body)

    return data
}