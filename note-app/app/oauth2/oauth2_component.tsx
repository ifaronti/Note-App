'use client'

import { git_login } from "@/hooks/git_login";
import { useEffect } from "react";
import { Circles } from 'react-loader-spinner'
import useNavigation from "@/hooks/useNavigation";


export default function Oauth2() {
    const {set, push, get} = useNavigation()


    useEffect(() => {
        const get_user = async () => {
            const code = String(get('code'))
            if (!code) {
                set('toast', 'Unable to get git code -red')
            }

            try {
                const data = await git_login(code)
                if (data.success) {
                    set('toast', data.message)
                    localStorage.setItem('token', data.access_token)
                    return push('/dashboard?color=light&pane=&font=san-serif')
                }
                if (!data.success || data.details) {
                    set('toast', data.message + ' -red')
                }
            }
            catch (err:any) {
                set('toast', err.message + ' -red')
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
