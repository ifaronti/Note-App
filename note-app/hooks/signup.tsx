"use server"

import { formEvent } from "@/components/models/props"
import axios from "axios"

export type body = {
    email: string
    password:string
}

export async function register(body:body) {
    const url = process.env.APP_URL

    await axios.post(`${url}/auth/signup`, body)
    console.log('Raw in and out!')   
}