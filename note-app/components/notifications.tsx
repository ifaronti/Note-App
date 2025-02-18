'use client'

import useNavigation from "@/hooks/useNavigation";
import { useEffect, Suspense } from "react";

export default function Notification() {
    const { get, del } = useNavigation()
    const toast = get('toast')

    const info_svg = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24"><path className="stroke-red-500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063" /></svg>

    const check_mark = <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24"><path className="fill-green-500" fillRule="evenodd" d="m15.993 10.222-4.618 4.618a.746.746 0 0 1-1.061 0l-2.309-2.309a.75.75 0 0 1 1.06-1.061l1.78 1.779 4.087-4.088a.75.75 0 1 1 1.061 1.061ZM12 2.5c-5.238 0-9.5 4.262-9.5 9.5 0 5.239 4.262 9.5 9.5 9.5s9.5-4.261 9.5-9.5c0-5.238-4.262-9.5-9.5-9.5Z" clipRule="evenodd" /></svg>
    
    useEffect(() => {
        const timeout = setTimeout(() => {
           del('toast')
        },5000) 
       
       return clearTimeout(timeout) 
    },[toast])
    
    return (
        <Suspense>
            <div
                className={`${toast? 'left-[40%] bg-[#eaecf0] notification bottom-10 max-w-[350px] flex h-8 items-center py-2 fixed text-black px-2 gap-2 rounded-lg border border-[#E0E4EA]': 'hidden left-0'}`}
            >
            <div className="">
                {
                    toast?.includes('-red') ? info_svg
                        :
                    !toast ? '' : check_mark
                }
            </div>
                <p className="w-full">{toast?.replace('-red', '')}</p>
            </div>
        </Suspense>
    )
}