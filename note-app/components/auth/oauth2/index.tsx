'use client'

import { git_login } from "@/hooks/git_login";
import { useEffect, useState } from "react";
import { Circles } from 'react-loader-spinner';
import useNavigation from "@/hooks/useNavigation";


export default function Oauth2() {
    const [status, setStatus] = useState('Collecting user info from github')
    const { set, push, get, del } = useNavigation()
    const code = get('code')


    useEffect(() => {
        const get_user = async () => {
            if (!code) {
                return set('toast', 'Unable to get git code -red')
            }
            try {
                const data = await git_login(String(code))
                
                if (data.success) {
                    setStatus('Redirecting')
                    set('toast', data.message)
                    localStorage.setItem('token', data.access_token)
                    del('code')
                    return push('/dashboard?color=light&pane=&font=san-serif')
                }
                if (!data.success || data.details) {
                    return set('toast', 'Unable to reach a handshake from github' + ' -red')
                }
            }
            catch (err:any) {
                set('toast', 'Unexpected error has occured' + ' -red')
            }
        } 
        const abortController = new AbortController()
        get_user()
        return abortController.abort()
    }, [])
    
    return (
        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            {status}
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
