'use client'
import Email_Input from "../form/email_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import {useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import Form_Btn from "../form/form_btn";
import { useResetLink } from "@/hooks/reset_link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";


export default function Forgot_Password() {
    const [status, setStatus] = useState(false)
    const params = new URLSearchParams(useSearchParams())
    const status_message = params.get('toast')
    const router = useRouter()
    const pathname = usePathname()

    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.patternMismatch) {
            params.set('toast', 'Enter a valid email')
            router.replace(`${pathname}?${params}`)
            setStatus(true)
        }
    }

    async function handleSubmit(e: formEvent) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = { email: String(formData.get('email')) }
        try {
            const response = await useResetLink(body)
            if (response.success) {
                params.set('toast', 'Link sent to email')
                router.replace(`${pathname}?${params}`)
                setStatus(true)
                setTimeout(() => {
                    router.push('/login')
                },2000)
            }
        }
        catch (err: any) {
            params.set('toast', err.message)
            router.replace(`${pathname}?${params}`)
            setStatus(true)
        }
    }

    return (
        <section className="flex flex-col bg-page rounded-lg gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12">
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Email_Input
                    handleBlur={handleBlur}
                />
                <Form_Btn btn_text="Send Reset Link" />
                <Form_Errors text={String(status_message)} error = {status} />
            </form>
        </section>
    )
}