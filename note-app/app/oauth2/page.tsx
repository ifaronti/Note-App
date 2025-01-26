'use client'

import { git_login } from "@/hooks/git_login";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Page() {
    const params = new URLSearchParams(useSearchParams())
    const router = useRouter()

    useEffect(() => {
        const get_user = async () => {
            const code = String(params.get('code'))
            if (!code) {
                params.set('toast', 'Unable to get git code')
            }
            try {
                const data = await git_login(code)
                if (data.success) {
                    params.set('toast', data.message)
                    localStorage.setItem('token', data.access_token)
                    router.push('/dashboard?color=light&pane=')
                }
                if (!data.success || data.details) {
                    params.set('toast', data.message)
                }
            }
            catch (err:any) {
                params.set('toast', err.message)
            }
        } 
        get_user()
    },[])
}