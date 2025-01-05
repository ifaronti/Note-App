'use server'
import axios from 'axios'

export async function useReset(formData:FormData) {

    return console.log(formData.get('email'));
    
}