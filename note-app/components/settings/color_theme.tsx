import Theme_Input from "./themes_input";
import { light_mode_icon, dark_mode_icon, system_mode_icon} from "../svg_assets";
import { presets } from "../text";
import { useState } from "react";
import { inputEvent } from "../models/props";
import Apply_Changes from "./apply_changesBTN";
import useNavigation from "@/hooks/useNavigation";

export default function Color_Theme() {
    const [color, setColor] = useState('')
    const { set, get } = useNavigation()
    const color_setting = get('color')

    function apply_changes() {
        if (!color) {
            return
        }

        let local_color = color
        if (color == 'system') {
            if (window.matchMedia(('prefers-color-scheme: light')).matches) {
                local_color = 'light'
            }
            else {
                local_color = 'dark'
            }
        }
        set('color', color)
        localStorage.setItem('color', local_color || 'light')
        document.documentElement.setAttribute(
            "data-theme", local_color || 'light')
    }

    function handleChange(e: inputEvent) {
        const { value } = e.target
        setColor(value)
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
                    text="Pick a clean and classic light theme." current={String(color_setting)}
                />
                <Theme_Input handleChange={handleChange} mode="Dark Mode"
                    icon={dark_mode_icon} value="dark" name="color"
                    text="Select a sleek and modern dark theme." current={String(color_setting)}
                />
                <Theme_Input handleChange={handleChange} mode="System"
                    icon={system_mode_icon} value="system" name="color"
                    text="Adapt to your device's theme." current={String(color_setting)}
                />
            </div>
            <div className="xl:w-[528px] w-full flex justify-end">
                <Apply_Changes apply_changes={apply_changes} text="Apply Changes"/>
            </div>
        </div>
    )
}