'use server'
import { formEvent } from "@/components/models/props"
import axios from "axios"

export async function useLogin(formData:FormData) {
    const rawData = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    console.log(rawData);
    
    const url = process.env.NEXT_APP_URL
    return console.log('Yuppy!')
}