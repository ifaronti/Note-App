import Password_Input from "../auth/form/password_input"
import { presets } from "../text"
import { Re_Password } from "@/hooks/reset_password"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { formEvent } from "../models/props"

export default function Change_Password() {
    const router = useRouter()
    const queries = useSearchParams()
    const params = new URLSearchParams(queries)
    const pathname = usePathname()

    async function reset_pass(e: formEvent) {
        const formData = new FormData(e.currentTarget)
        const payload = { password: String(formData.get('new')) }
        console.log(payload);
        
        try {
            const data = await Re_Password(payload, String(localStorage.getItem('token')))
            
            params.set('toast', data.message)
            router.replace(`${pathname}?${params}`)
        }
        catch (err: any) {
            params.set('toast', err.message)
            // router.replace(`${pathname}?${params}`)
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
        </form>
    )
}