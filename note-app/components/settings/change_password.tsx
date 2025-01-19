import Password_Input from "../auth/form/password_input"
import Apply_Changes from "./apply_changesBTN"
import { presets } from "../text"

export default function Change_Password() {
    
    return (
        <form className="xl:w-[528px] w-full flex flex-col gap-6 md:p-8 p-4">
            <h2 className={`xl:${presets.preset3} ${presets.preset1}`}>Change Password</h2>
            <Password_Input label="Old Password" name="old" />
            <Password_Input label="New Password" name="new" />
            <Password_Input label="Confirm New Password" name="confirm" />
            <button type="button"
                className={`
                    w-[132px] hover:bg-[#2547D0] bg-[#335CFF] 
                    ${presets.preset4} text-white h-[41px] self-end rounded-lg`
                }
            >Save Password
            </button>
        </form>
    )
}