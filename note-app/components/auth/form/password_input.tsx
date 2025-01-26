import { inputEvent } from "@/components/models/props"
import Password_Toggle from "../password_toggle"
import { useState } from "react"
import { presets } from "@/components/text"
import Link from "next/link"
import { usePathname } from "next/navigation"

type inputProps = {
    handleBlur?: (e: inputEvent) => void,
    name?: string
    label?: string
}

export default function Password_Input({name, label, handleBlur, }:inputProps){
    const [show_pass, setShow_Pass] = useState(false)
    const pathName = usePathname()
    
    return (
        <div className="flex relative flex-col-reverse w-full gap-[6px]">
            <input
                type={show_pass? "text":"password"}
                name={name}
                id={name}
                onBlur={handleBlur}
                minLength={8}
                className="h-[42px] bg-inherit px-4 cursor-pointer rounded-lg peer/password w-full invalid:border-[red] border border-[#cacfd8]"
            />
            <label htmlFor="password" className="text-text9 relative flex items-center peer-invalid/password:text-red-500">{label} {
                !pathName.includes('reset') &&!pathName.includes("dashboard") && <Link className={`hover:text-[335CFF] text-text5 underline absolute right-0 ${presets.preset6}`} href={"/login/forgot"}>Forgot</Link>}
            </label>
            
            <div className="absolute right-10 top-10">
                <Password_Toggle
                    show_pass={show_pass}
                    toggle={()=>setShow_Pass(!show_pass)}
                />
            </div>
        </div>
    )
}