import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { presets } from "../text"
import { inputEvent } from "../models/props"

type props = {
    mode: string
    text: string
    icon: any
    value: string
    handleChange: (e: inputEvent) => void
    current: string
    name:string
}

export default function Theme_Input({ mode, value, name,
    current, text, icon, handleChange }: props) {
    
    return (
        <label htmlFor={value} className={`${current === value? 'bg-input_bg':''} hover:bg-input_bg h-[72px] border border-[#E0E4EA] xl:w-[528px] w-full px-4 rounded-xl flex justify-between items-center`}>
            <div className="flex items-center gap-4">
                <div className="w-10 border bg-white border-[#E0E4EA] h-10 flex items-center justify-center rounded-xl">{icon}</div>
                <div className="flex flex-col">
                    <p className={`${presets.preset4} text-text9`}>{mode}</p>
                    <p className={`${presets.preset6} text-text7`}>{text}</p>
                </div>
            </div>
            <input
                type="radio"
                value={value}
                name={name}
                id={value}
                onChange={handleChange}
            />
        </label>
    )
}