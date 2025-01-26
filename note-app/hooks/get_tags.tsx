'use server'
import axios from "axios"
type response = { tags: string[], success: string, message: string }

export async function get_tags(token:string) {
    const url = process.env.APP_URL
    try {
        const { data } = await axios.get<response>(`${url}/notes/tags`,
            { headers: { Authorization: `Bearer ${token}` } }
        ) 
        return data
    }
    catch (err:any) {
        throw new Error(`An unexpected error has occured:${err.message}`)
    }
}