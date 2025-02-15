import { chevy_right } from "../svg_assets"
import React from "react"
import useNavigation from "@/hooks/useNavigation"

type props = {
    icon: any
    name: string
    text:string
}

export default function Settings_BTN({ icon, name, text }: props) {
    const {set, get, push} = useNavigation()
    const current = get('setting')
  

    function change_setting() {
        set('setting', name)
    }

    function logout() {
        localStorage.clear()
        push(`/login`)
    }

    return (
        <button onClick={text === 'Logout'? logout:change_setting} className={`flex px-3 w-full h-[36px] ${current === name? "bg-auth_page animate-pulse text-text9 rounded-lg":"bg-none text-text7"} justify-between items-center`}>
            <span className="flex items-center gap-2">
                {icon}
                <span>{text}</span>
            </span>
            <span>{current === name? chevy_right:''}</span>
        </button>
    )
}