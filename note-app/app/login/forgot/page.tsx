import Forgot_Password from "@/components/auth/forgot_password";
import { Suspense } from "react"
import Notification from "@/components/notifications"

export default function Page() {
    return (
        <Suspense>
            <Forgot_Password />
            <Notification/>
        </Suspense>
    )
}