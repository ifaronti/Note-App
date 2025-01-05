"use server"
import Forgot_Password from "@/components/auth/forgot_password";
import {useReset} from "@/hooks/reset_link";

export default async function Page() {
    return (
        <Forgot_Password sendLink={useReset}/>
    )
}