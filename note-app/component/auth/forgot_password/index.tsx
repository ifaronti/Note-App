import Email_Input from "../form/email_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/component/models/props";
import { presets } from "@/component/text";

type prop = {sendLink:(email:string)=>void}

export default function Forgot_Password({sendLink}:prop) {
    const [info, setInfo] = useState({ email: '', password: '' })
    const [error, setError] = useState(false)
    
    const handleChange = (e: inputEvent) => {
        setError(false)
        return setInfo(prev => {
            return {...prev, email:e.target.value}
        })
    }
    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.patternMismatch) {
            return setError(true)
        }
    }

    async function handleSubmit (e:formEvent){
        e.preventDefault()
        if (!info.email || error) {
            return
        }
        sendLink(info.email)
    }

    return (
        <section className="flex flex-col gap-4 md:w-[540px] px-4 py-48 w-[343px] md:px-12">
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Email_Input
                    userInfo={info}
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