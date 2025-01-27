'use client'
import Password_Input from "../form/password_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { password_reset } from "@/hooks/reset_password";
import Form_Btn from "../form/form_btn";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Reset_Password() {
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(useSearchParams())
    const token = String(params.get('token'))

    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.tooShort) {
            setMessage('Password must be atleast 8 characters long')
            return setError(true)
        }
    }

    async function handleSubmit (e:formEvent){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const password = String(formData.get('password'))
        const confirm = String(formData.get('confirm'))
    
        if (!password || password !== confirm || error) {
            setMessage('Passwords must match to avoid errors')
            setError(true)
            return
        }
        try {
            const response = await password_reset({ password: password }, token)
            if (response.success) {
                params.delete('token')
                params.set('toast', 'Password reset was successful')
                setMessage('Password reset was successful')
                setError(true)
                router.replace(`${pathname}?${params}`)
                setTimeout(() => {
                    router.push('/login')
                }, 2000)
            }
        }
        catch (err:any) {
            params.set('toast', 'An unknown error has occured')
            router.replace(`${pathname}?${params}`)
        }
    }
    
    return (
        <section className="flex bg-page rounded-lg flex-col gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12">
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
                <Password_Input handleBlur={handleBlur} label="Password" name="password" />

                <Password_Input handleBlur={handleBlur} label="Confirm Password" name="confirm" />

                <Form_Btn btn_text="Reset Password" />
                <Form_Errors text={message} error = {error} />
            </form>
        </section>
    )
}