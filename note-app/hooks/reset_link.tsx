'use server'
import { formEvent } from '@/components/models/props';
import axios from 'axios'

export async function useResetLink(body:{email:string}) {
    const url = process.env.APP_URL

    const { data } = await axios.post(`${url}/auth/login/forgot`, body)
    
    return data
}