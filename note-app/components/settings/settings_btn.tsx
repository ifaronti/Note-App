import { chevy_right } from "../svg_assets"
import React from "react"
import { useSearchParams, useRouter, usePathname} from "next/navigation"

type props = {
    icon: any
    name: string
    text:string
}

export default function Settings_BTN({ icon, name, text }: props) {
    const pathName = usePathname()
    const params = useSearchParams()
    const searchParams = new URLSearchParams(params)
    const current = searchParams.get('setting')
    const router = useRouter()

    function change_setting() {
        searchParams.set('setting', name)
        router.replace(`${pathName}?${searchParams}`)
    }

    function logout() {
        localStorage.clear()
        router.push(`/login`)
    }

    return (
        <button onClick={text === 'Logout'? logout:change_setting} className={`flex px-3 w-full h-[36px] ${current === name? "bg-auth_page text-text9 rounded-lg":"bg-none text-text7"} justify-between items-center`}>
            <span className="flex items-center gap-2">
                {icon}
                <span>{text}</span>
            </span>
            <span>{current === name? chevy_right:''}</span>
        </button>
    )
}