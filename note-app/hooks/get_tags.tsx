'use server'
import axios from "axios"
type response = { tags: string[], success: string, message: string }

export async function GetTags(token:string) {
    const url = process.env.APP_URL

    try {
        const { data } = await axios.get(`${url}/notes/tags`,
            { headers: { Authorization: `Bearer ${token}` } }
        ) 
        return data
    }
    catch (err) {
        throw new Error('An unexpected error has occured. Please try again')
    }
}