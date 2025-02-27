'use client'
import Email_Input from "../form/email_input";
import Form_Errors from "../form/errors";
import Auth_Hero from "../auth_hero";
import { formEvent, inputEvent } from "@/components/models/props";
import Form_Btn from "../form/form_btn";
import { useResetLink } from "@/hooks/reset_link";
import useNavigation from "@/hooks/useNavigation";


export default function Forgot_Password() {
    const {set, get, push, get_font} = useNavigation()
    const status_message = get('toast')

    const handleBlur = (e: inputEvent) => {
        if (e.target.validity.patternMismatch) {
            set('toast', 'Enter a valid email -red')
        }
    }

    async function handleSubmit(e: formEvent) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')

        if (!email) {
            return set('toast', 'Email registered to the account required')
        }

        const body = { email: String('email') }
        try {
            const response = await useResetLink(body)
            if (response.success) {
                set('toast', 'Link sent to email')
                setTimeout(() => {
                    push('/login')
                },2000)
            }
            else {
                set('toast', 'Ensure email is registered -red')
            }
        }
        catch (err: any) {
            set('toast', 'Ensure the email matches one registered' + '-red')
        }
    }

    return (
        <section className={`${get_font()} flex flex-col bg-page rounded-lg gap-4 md:w-[540px] px-4 py-12 w-[343px] md:px-12`}>
            <Auth_Hero
                header="Forgotten your password?"
                description="Enter your email below, and we’ll send you a link to reset it."
            />
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Email_Input
                    handleBlur={handleBlur}
                />
                <Form_Btn btn_text="Send Reset Link" />
                <Form_Errors text={status_message? status_message : ''}  />
            </form>
        </section>
    )
}