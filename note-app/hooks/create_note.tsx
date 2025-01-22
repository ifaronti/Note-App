'use server'

import axios from "axios";

type body = {
    title: string
    tags: string[]
    content: string
    last_edited:string
}

export async function new_note(body:body, token:string){
    let response
    try {
        const { data } = await axios.post(`${process.env.APP_URL}/notes/new`, body,
            { headers: { Authorization: `Bearer ${token}` } })
        
        if (!data.success) {
            throw new Error('Note was not successfully created. Ensure title, content and tags fields are not empty')
        }
        response = data
    }
    catch (err:any) {
        throw new Error(err.message)
    }
    return response
}