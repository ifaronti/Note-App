'use server'

import axios from "axios";

export async function git_login(code:string) {

    const { data } = await axios.post(`${process.env.APP_URL}/auth/login/git?code=${code}`)
    
    return data
}