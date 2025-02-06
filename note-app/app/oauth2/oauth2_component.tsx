'use client'

import { git_login } from "@/hooks/git_login";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Circles } from 'react-loader-spinner'


export default function Oauth2() {

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
                    router.push('/dashboard?color=light&pane=&font=san-serif')
                }
                if (!data.success || data.details) {
                    params.set('toast', data.message)
                }
            }
            catch (err:any) {
                params.set('toast', err.message + ' -red')
            }
        } 
        get_user()
    }, [])
    
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Circles
                height="80"
                width="80"
                color="#355CFF"
                ariaLabel="circles-loading"
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
