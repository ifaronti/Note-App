'use client'
import Password_Input from "../form/password_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { password_reset } from "@/hooks/reset_password";
import Form_Btn from "../form/form_btn";
import useNavigation from "@/hooks/useNavigation";

export default function Reset_Password() {
    const {set, push, get, del} = useNavigation()
    const [showStatus, setShowStatus] = useState(false)
    const [message, setMessage] = useState('')

    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.tooShort) {
            setMessage('Password must be atleast 8 characters long')
            return setShowStatus(true)
        }
    }

    async function handleSubmit (e:formEvent){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const password = String(formData.get('password'))
        const confirm = String(formData.get('confirm'))
    
        if (!password || password !== confirm) {
            setMessage('Passwords must match to avoid errors')
            setShowStatus(true)
            return
        }
        try {
            const response = await password_reset({ password: password }, String(get('token')))
            if (response.success) {
                del('token')
                set('toast', 'Password reset was successful')
                setMessage('Password reset was successful')
                setShowStatus(true)

                setTimeout(() => {
                    push('/login')
                }, 2000)
            }
        }
        catch (err:any) {
            set('toast', 'An unknown error has occured')
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
                <Form_Errors text={message} error = {showStatus} />
            </form>
        </section>
    )
}