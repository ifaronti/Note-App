'use client'
import Email_Input from "../form/email_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { presets } from "@/components/text";

type prop = {sendLink:(formData:FormData)=>void}

export default function Forgot_Password({sendLink}:prop) {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    
    const handleChange = (e: inputEvent) => {
        setError(false)
        return setEmail(e.target.value)
    }
    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.patternMismatch) {
            return setError(true)
        }
    }

    return (
        <section className="flex flex-col bg-bak_g rounded-lg gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12">
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form action={sendLink} className="flex flex-col gap-4">
                <Email_Input
                    value={email}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />
                <Form_Errors
                    text="Please enter a valid email address"
                    error = {error}
                />
                <button type="submit" className={`${presets.preset3} cursor-pointer w-full hover:bg-[#2547D0] h-10 rounded-lg bg-[#335CFF] text-white`}>Send Reset Link</button>
            </form>
        </section>
    )
}