
import Reset_Password from "@/components/auth/reset_password";
import { Suspense } from "react";
import Notification from "@/components/notifications";

export default function Page() {
    
    return (
        <Suspense>
            <Reset_Password />
            <Notification/>
        </Suspense>
    )
}