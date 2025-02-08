'use server'

import axios from "axios";

type body = {
    title: string
    tags: string[]
    content: string,
}

export async function new_note(body:body, token:string){
    const { data } = await axios.post(`${process.env.APP_URL}/notes/new`, body,
        { headers: { Authorization: `Bearer ${token}` } })
    
    return data
}