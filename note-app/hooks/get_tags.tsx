'use server'
import axios from "axios"

export async function GetTags(refetch?:boolean) {
    const url = process.env.APP_URL

        let cached_tags: string[] = []
    
        // if (!cached_tags[0] || refetch) {
        //     // const { data } = await axios.get(`${url}/api/tags`)
        //     cached_tags = data.tags
        // }

    console.log('Ok!')

    return cached_tags
}