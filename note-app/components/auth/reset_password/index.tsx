'use client'
import Password_Input from "../form/password_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { useEffect } from "react";
import { formEvent, inputEvent } from "@/components/models/props";
import { password_reset } from "@/hooks/reset_password";
import Form_Btn from "../form/form_btn";
import useNavigation from "@/hooks/useNavigation";
import Link from "next/link";

export default function Reset_Password() {
    const {set, push, get, get_font} = useNavigation()
    const toast = get('toast')

    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.tooShort) {
            set('toast', 'Password must be atleast 8 characters long')
        }
    }

    useEffect(() => {
        const token = get('token')
        if (!token) {
            push('/login')
        }
    },[])

    async function handleSubmit (e:formEvent){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const password = String(formData.get('password'))
        const confirm = String(formData.get('confirm'))
    
        if (!password || password !== confirm) {
            set('toast','Passwords must match')
            return
        }
        try {
            const response = await password_reset({ password: password }, String(get('token')))
            if (response.success) {
                set('toast', 'Password reset was successful')
                setTimeout(() => {
                    push('/login')
                }, 2000)
            }
        }
        catch (err: any) {
            set('toast', err.message + ' -red')
        }
    }
    
    return (
        <section className={`${get_font()} flex bg-page rounded-lg flex-col gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12`}>
            <Auth_Hero
                header="Forgotten your password?"
                description="Choose a new password to secure your account."
            />
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
                <Password_Input handleBlur={handleBlur} label="Password" name="password" />

                <Password_Input handleBlur={handleBlur} label="Confirm Password" name="confirm" />

                <Form_Btn btn_text="Reset Password" />
                <Form_Errors text={toast? toast:''}  />
            </form>
            <Link className="text-center" href={'/'}>Return To Home Page</Link>
        </section>
    )
}