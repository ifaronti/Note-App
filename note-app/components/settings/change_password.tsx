import Password_Input from "../auth/form/password_input"
import { presets } from "../text"
import { password_reset } from "@/hooks/reset_password"
import { formEvent } from "../models/props"
import useNavigation from "@/hooks/useNavigation"
import Form_Errors from "../auth/form/errors"
import { useState } from "react"

export default function Change_Password() {
    const { set, get } = useNavigation()
    const toast = get('toast')
    const [showStatus, setShowStatus] = useState(false)

    async function reset_pass(e: formEvent) {
        const formData = new FormData(e.currentTarget)
        const payload = { password: String(formData.get('new')) }
        
        try {
            const data = await password_reset(payload, String(localStorage.getItem('token')))
            set('toast', data.message)
            setShowStatus(true)
        }
        catch (err: any) {
            set('toast', err.message)
            setShowStatus(true)
        }
    }

    return (
        <form onSubmit={reset_pass} className="xl:w-[528px] w-full flex flex-col gap-6 md:p-8 p-4">
            <h2 className={`xl:${presets.preset3} ${presets.preset1}`}>Change Password</h2>

            <Password_Input label="Old Password" name="old" />

            <Password_Input label="New Password" name="new" />

            <Password_Input label="Confirm New Password" name="confirm" />

            <button type="button"
                className={`w-[132px] hover:bg-[#2547D0] bg-[#335CFF] 
                    ${presets.preset4} text-white h-[41px] self-end rounded-lg`
                }
            >Save Password
            </button>
            {toast && <Form_Errors error={showStatus} text={toast} />}
        </form>
    )
}