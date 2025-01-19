'use client'
import Form_Component from "./form";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { usePathname } from "next/navigation";
import { register } from "@/hooks/signup";
import { useLogin } from "@/hooks/login";

type props = {
    btn_text: string
}

export default function Form({btn_text}:props) {
    const [errors, setErrors] = useState({ email: false, password: false })
    const [toast, setToast] = useState('')
    const path = usePathname()
    
    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.tooShort) {
            return setErrors(prev => {
                return {...prev, password:true}
            })
        }
        if (e.target.validity.patternMismatch) {
            return setErrors(prev => {
                return {...prev, email:true}
            })
        }
    }

    async function forward_submit(e: formEvent) {
        e.stopPropagation()
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const rawData = {
            email:String(formData.get('email')),
            password:String(formData.get('password')),
        }

        formData.append('username', rawData.email)
        formData.delete('email')

        try {
            const data = path.includes('login') ? await useLogin(formData) : await register(rawData)
            if (data.access_token) {
                localStorage.setItem('token', data.access_token)
            }
            setToast(data.message)
        }
        catch (err: any) {
            //@ts-expect-error
            setToast(e.message)
        }
    
    }

    return (
            <Form_Component
                handleBlur={handleBlur}
                handleSubmit={forward_submit}
                errors={errors}
                btn_text={btn_text}
            />
    )
}