'use server'
import axios from "axios"

export type loginres = {
    access_token: string
    success: boolean
    token_type:string
}


export async function useLogin(formData:FormData) {
    const url = process.env.APP_URL 
    let resData:loginres =  {access_token:'', success:false, token_type:"Bearer"}  
    try {
        const { data } = await axios.post<loginres>(`${url}/auth/login`, formData)

        resData = data
    }
    catch (error:any) {
        throw new Error(error.message)
    }
   
    return resData
}