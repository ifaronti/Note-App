"use server"
import axios from "axios"

export async function password_reset(body:{password:string}, token:string) {
    const url = process.env.APP_URL
    
    const { data } = await axios.patch(`${url}/auth/login/reset`, body,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )    
    
    return data
}