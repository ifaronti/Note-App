import Password_Input from "../auth/form/password_input"
import { presets } from "../text"
import { password_reset } from "@/hooks/reset_password"
import { formEvent } from "../models/props"
import useNavigation from "@/hooks/useNavigation"
import Form_Errors from "../auth/form/errors"
import { useState } from "react"

export default function Change_Password() {
    const { set, get, del } = useNavigation()
    const toast = get('toast')


    async function reset_pass(e: formEvent) {
        e.preventDefault()
        del('toast')

        const formData = new FormData(e.currentTarget)
        
        if (formData.get('new') !== formData.get('confirm')) {
            set('toast', 'passwords do not match')
        }

        const payload = {
            password: String(formData.get('new')),
            old_pass: String(formData.get('old'))
        }
        
        try {
            const data = await password_reset(payload, String(localStorage.getItem('token')))
            if(data.success) {
                set('toast', 'Password Changed Successfully')
            }
        }
        catch(err: any) {
            set('toast', 'An unexpected error  has occured -red')
        }
    }

    return (
        <form onSubmit={reset_pass} className="xl:w-[528px] w-full flex flex-col gap-6 md:p-8 p-4">
            <h2 className={`xl:${presets.preset3} ${presets.preset1}`}>Change Password</h2>

            <Password_Input label="Old Password" name="old" />

            <Password_Input label="New Password" name="new" />

            <Password_Input label="Confirm New Password" name="confirm" />

            <button 
                className={`w-[132px] hover:bg-[#2547D0] bg-[#335CFF] 
                    ${presets.preset4} text-white h-[41px] self-end rounded-lg`
                }
            >
                Save Password
            </button>
            {toast && <Form_Errors text={toast} />}
        </form>
    )
}