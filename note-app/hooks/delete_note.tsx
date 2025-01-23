'use server'

import axios from "axios";

export async function delete_note(id: number, token:string) {
    let response
    try {
        const { data } = await axios.delete(`${process.env.APP_URL}/notes/${id}`,
            {headers:{Authorization:`Bearer ${token}`}}
        )
        response = data
    }
    catch (err:any) {
        throw new Error(err.message)
    }
    return response
}