'use client'
import Email_Input from "../form/email_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { presets } from "@/components/text";
import Form_Btn from "../form/form_btn";

type prop = {sendLink:(formData:FormData)=>void}

export default function Forgot_Password({sendLink}:prop) {
    const [error, setError] = useState(false)
    
    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.patternMismatch) {
            return setError(true)
        }
    }

    async function handleSubmit(e: formEvent) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const response = sendLink(formData)
        return response
    }

    return (
        <section className="flex flex-col bg-bak_g rounded-lg gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12">
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Email_Input
                    handleBlur={handleBlur}
                />
                <Form_Errors
                    text="Please enter a valid email address"
                    error = {error}
                />
            <Form_Btn btn_text="Send Reset Link"/>
            </form>
        </section>
    )
}