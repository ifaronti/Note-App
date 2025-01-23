'use server'
import axios from "axios"
import { opt_note } from "@/components/models/items"

export async function update_note(body:opt_note, token: string) {
    let response
    try {
        const { data } = await axios.patch(
            `${process.env.APP_URL}/notes/note/${body.id}`,
            body,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        if (!data.success) {
            throw new Error('Unable to update note. Please try again')
        }
        response = data
    }
    catch (err:any) {
        throw new Error(err.message)
    }
    return response
}