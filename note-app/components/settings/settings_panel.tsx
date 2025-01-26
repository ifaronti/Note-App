import HR_LINE from "../hr_line"
import Settings_BTN from "./settings_btn"
import { useSearchParams } from "next/navigation"

export default function Settings_Panel() {
    const current = useSearchParams().get('setting')
    const color = useSearchParams().get('color')

    const font_svg = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"><path className={`${current === "font"? "fill-text9":"fill-text7"}`} fillRule="evenodd" d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z" clipRule="evenodd"/><path className={`${current === "font"? "fill-text9":"fill-text7"}`} fillRule="evenodd" d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z" clipRule="evenodd"/></svg>
    const lock_icon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"><path className={`${current === "password"? "stroke-text9":"stroke-text7"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"/><path className={`${current === "password"? "stroke-text9":"stroke-text7"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z" clipRule="evenodd"/><path className={`${current === "password"? "stroke-text9":"stroke-text7"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11.862 14.203v2.22"/></svg>
    const color_icon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"><path className={`${current === "color"? "stroke-text9":"stroke-text7"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"/><path className={`${current === "theme"? "stroke-text9":"stroke-text7"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z" clipRule="evenodd"/></svg>
    const logout_icon = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"><path className="stroke-text9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014" /></svg>
    
    return (
        <div className="flex flex-col w-full gap-2">
            <Settings_BTN name="color" text="Color Theme" icon={color_icon} />
            <Settings_BTN name="font" text="Font Theme" icon={font_svg} />
            <Settings_BTN name="password" text="Change Password" icon={lock_icon} />
            <HR_LINE />
            <Settings_BTN text="Logout" name="Logout" icon={logout_icon} />
        </div>
    )
}