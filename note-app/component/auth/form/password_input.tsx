import { inputProps } from "@/component/models/props"
import Password_Toggle from "../password_toggle"
import { useState } from "react"
import { presets } from "@/component/text"
import Link from "next/link"

export default function Password_Input({handleChange, handleBlur, value, id }:inputProps){
    const [show_pass, setShow_Pass] = useState(false)

    return (
        <div className="flex relative flex-col-reverse w-full gap-1">
            <input
                value={value}

                type={show_pass? "text":"password"}
                name="password"
                id="password"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder={id? "enter password again":''}
                min={8}
                className="h-[42px] cursor-pointer rounded-lg peer/password w-full invalid:border-[red] border border-[#cacfd8]"
            />
            <label htmlFor="password" className="text-text9 relative peer-invalid/password:text-red-500">Password <Link className={`hover:text-[335CFF] absolute right-0 ${presets.preset6}`} href={"/"}>Forgot</Link></label>
            
            <span className="absolute">
                <Password_Toggle
                    show_pass={show_pass}
                    toggle={()=>setShow_Pass(!show_pass)}
                />
            </span>
        </div>
    )
}