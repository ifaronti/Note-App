'use server'
import axios from "axios"
import { opt_note } from "@/components/models/items"

export async function update_note(body:opt_note, token: string) { 
    const { data } = await axios.patch(
        `${process.env.APP_URL}/notes/note/${body.id}`,
        body,
        { headers: { Authorization: `Bearer ${token}` } }
    )
    return data
}