'use server'

import axios from "axios";

export async function delete_note(id: number, token:string) {

    const { data } = await axios.delete(`${process.env.APP_URL}/notes/${id}`,
        {headers:{Authorization:`Bearer ${token}`}}
    )
    return data
}