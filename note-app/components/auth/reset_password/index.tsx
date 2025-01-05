'use client'
import Password_Input from "../form/password_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { presets } from "@/components/text";
import { useResePassword } from "@/hooks/reset_password";

export default function Reset_Password() {
    const [info, setInfo] = useState({ confirm: '', password: '' })
    const [error, setError] = useState(false)
    
    const handleChange = (e: inputEvent) => {
        setError(false)
        if (e.target.placeholder !== '') {
            return setInfo(prev => {
                return {...prev, confirm:e.target.value}
            })
        }
        setInfo(prev => {
            return {...prev, password:e.target.value}
        })
    }
    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.tooShort) {
            return setError(true)
        }
    }

    async function handleSubmit (e:formEvent){
        e.preventDefault()
        const {password, confirm} = info
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
                <Password_Input
                    value={info.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                />
                <Password_Input
                    value={info.confirm}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    id="Confirm"
                />
                <Form_Errors
                    text="Password must be 8 characters long"
                    error = {error}
                />
                <button type="submit" className={`${presets.preset3} cursor-pointer w-full hover:bg-[#2547D0] h-10 rounded-lg bg-[#335CFF] text-white`}>Reset Password</button>
            </form>
        </section>
    )
}