'use server'
import axios from "axios"

export async function GetTags(token:string, refetch?:boolean) {
    const url = process.env.APP_URL
    const data  = fetch(
        `${url}/notes/tags`,
        {headers:{Authorization:`Bearer ${token}`}}
    ) 
   
    return (await data).json()
}