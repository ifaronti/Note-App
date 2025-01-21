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
    let resData = {success:false, message:''}
    try {
        const { data } = await axios.post<signupRes>(`${url}/auth/signup`, body)
        if (!data.success) {
            throw new Error('An error has occured, please check details and try again')
        }
        resData = data
    }
    catch (err:any) {
        throw new Error(`An unexpected error has occured: ${err.message}`)
    }
    return resData
}