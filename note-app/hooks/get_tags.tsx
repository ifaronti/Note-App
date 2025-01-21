'use server'
import axios from "axios"

export async function GetTags(token:string, refetch?:boolean) {
    const url = process.env.APP_URL
    let resData
    try {
        //@ts-expect-error
        if (resData?.tags && !refetch) {
            return resData
        }
        const { data } = await axios.get(`${url}/notes/tags`,
            { headers: { Authorization: `Bearer ${token}` } }
        ) 
        resData = data
    }
    catch (err) {
        throw new Error('An unexpected error has occured. Please try again')
    }
    return resData
}