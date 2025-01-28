'use server'
import { note } from "@/components/models/items"
// import { promises as fs } from 'fs';
import axios from "axios"

type resBody = {
    success: boolean
    data:note[]
}

export async function get_notes(token:string, parameter?:string) {
    // const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    // const data = JSON.parse(file);
    // const url = process.env.APP_URL === undefined ? "/data.json" : 

    let url = `${process.env.APP_URL}/notes`
    if (parameter && parameter !== 'server-notes') {
        url =`${url}?${parameter}`
    }
    
    try {
        const {data} = await axios.get<resBody>(url, {headers:{Authorization:`Bearer ${token}`}})
        return data
    }
    catch (err:any) {
        throw new Error(`An unexpected error has occured:${err.message}`)
    }
}