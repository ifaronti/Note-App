'use client'
import Password_Input from "../form/password_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { presets } from "@/components/text";
import { useResePassword } from "@/hooks/reset_password";
import Form_Btn from "../form/form_btn";

export default function Reset_Password() {
    const [error, setError] = useState(false)

    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.tooShort) {
            return setError(true)
        }
    }

    async function handleSubmit (e:formEvent){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const password = String(formData.get('password'))
        const confirm = String(formData.get('confirm'))
    
        if (!password || password !== confirm ||  error) {
            return
        }
        await useResePassword(password)
    }
    
    return (
        <section className="flex bg-bak_g rounded-lg flex-col gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12">
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
                <Password_Input handleBlur={handleBlur} name="password" />

                <Password_Input handleBlur={handleBlur} name="confirm" />

                <Form_Errors text="Password must be 8 characters long" error = {error} />
                <Form_Btn btn_text="Reset Password" />
            </form>
        </section>
    )
}