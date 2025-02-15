'use client'

import { git_login } from "@/hooks/git_login";
import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import useNavigation from "@/hooks/useNavigation";


export default function Oauth2() {
    const [status, setStatus] = useState('')
    const { set, push, get } = useNavigation()
    const code = get('code')


    useEffect(() => {
        const get_user = async () => {
            if (!code) {
                set('toast', 'Unable to get git code -red')
            }

            try {
                //@ts-expect-error
                const data = await git_login(code)
                if (data.success) {
                    set('toast', data.message)
                    localStorage.setItem('token', data.access_token)
                    return push('/dashboard?color=light&pane=&font=san-serif')
                }
                if (!data.success || data.details) {
                    return set('toast', data.message + ' -red')
                }
            }
            catch (err:any) {
                set('toast', err.message + ' -red')
            }
        } 
        get_user()
    }, [code])
    
    return (
        <div className="w-full h-full flex items-center justify-center">
            Redirecting
        </div>
    )
}
