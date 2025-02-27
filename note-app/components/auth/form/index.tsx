'use client'
import Form_Component from "./form";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { usePathname } from "next/navigation";
import { register, signupRes } from "@/hooks/signup";
import { loginres, useLogin } from "@/hooks/login";
import useNavigation from "@/hooks/useNavigation";

type props = {
    btn_text: string
}

export default function Form({ btn_text }: props) {
    const {set, push} = useNavigation()
    const [errors, setErrors] = useState({ email: false, password: false })
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
        const email = formData.get('email')
        const password = formData.get('password')

        if (!email || !password) {
            return set('toast', 'All fields are required -red')
        }

        //Fastapi login route can handle formData with its oauth2passwordbearer module but not register route
        const rawData = {
            email:email,
            password:password,
        }
        formData.append('username', rawData.email)
        formData.delete('email')

        try {
           //@ts-expect-error
            const data:loginres & signupRes = path.includes('login') ? await useLogin(formData) : await register(rawData)
            if (data.access_token) {
                localStorage.setItem('token', data.access_token)
                set('toast', 'logged in successfully')
                push('/dashboard?color=light&font=san-serif&pane=')
                return
            }
            else {
                set('toast', 'Ensure details are correct and try again -red')
            }
        }
        catch (err: any) {
            set('toast','An unexpected error has occured' + ' -red')
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