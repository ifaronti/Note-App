"use server"
import axios from "axios"

export async function Register(formData: FormData) {
    
    const rawData = {
        email:formData.get('email'),
        password:formData.get('password'),
    }
    console.log(rawData);
    return console.log('Raw in and out!')   
}