import Theme_Input from "./themes_input";
import { light_mode_icon, dark_mode_icon, system_mode_icon} from "../svg_assets";
import { presets } from "../text";
import { useState } from "react";
import { inputEvent } from "../models/props";
import Apply_Changes from "./apply_changesBTN";
import useNavigation from "@/hooks/useNavigation";

export default function Color_Theme() {
    const [color, setColor] = useState('')
    const [theme, setTheme] = useState('')
    const {set} = useNavigation()

    function apply_changes() {
        set('color', color)
        document.documentElement.setAttribute("data-theme", color === 'system'?theme:color)
    }

    function handleChange(e: inputEvent) {
        const { value } = e.target
        if (value == 'system') {
            if (window.matchMedia(('prefers-color-scheme: light')).matches) {
                setTheme('light')
                setColor(value)
                return 
            }
            setTheme('dark')
            setColor(value)
            return
        }
        setColor(value)
        return 
    }

    return (
        <div className="flex flex-col gap-6 p-8">
            <div>
                <h2 className={`${presets.preset3} text-text9`}>Color Theme</h2>
                <p className={`${presets.preset5} text-text7`}>Choose your color theme:</p>
            </div>
            <div className="flex flex-col gap-4">
                <Theme_Input handleChange={handleChange} mode="Light Mode"
                    icon={light_mode_icon} value="light" name="color"
                    text="Pick a clean and classic light theme." current={color}
                />
                <Theme_Input handleChange={handleChange} mode="Dark Mode"
                    icon={dark_mode_icon} value="dark" name="color"
                    text="Select a sleek and modern dark theme." current={color}
                />
                <Theme_Input handleChange={handleChange} mode="System"
                    icon={system_mode_icon} value="system" name="color"
                    text="Adapt to your device's theme." current={color}
                />
            </div>
            <div className="xl:w-[528px] w-full flex justify-end">
                <Apply_Changes apply_changes={apply_changes} text="Apply Changes"/>
            </div>
        </div>
    )
}