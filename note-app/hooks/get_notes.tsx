'use server'
import { note } from "@/components/models/items"
import { promises as fs } from 'fs';



export async function get_notes() {
    const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
    const data = JSON.parse(file);
    const url = process.env.APP_URL === undefined ? "/data.json" : process.env.APP_URL
    
    // let data: {notes:note[]} = {notes:[]}

    // fetch(url)
    // .then(res => res.json())
    // .then(json=> data = json)
    console.log('yes doing it good');
    
    return data.notes
}