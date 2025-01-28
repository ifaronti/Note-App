import Theme_Input from "./themes_input";
import { serif_icon, san_serif_icon, monospace_icon} from "../svg_assets";
import { presets } from "../text";
import { useState } from "react";
import { inputEvent } from "../models/props";
import Apply_Changes from "./apply_changesBTN";
import useNavigation from "@/hooks/useNavigation";

export default function Font_Theme() {
    const {set} = useNavigation()
    const [font, setFont] = useState('')

    function apply_changes() {
        set('font', font)
    }

    function handleChange(e: inputEvent) {
        const { value } = e.target
        setFont(value)
    }

    return (
        <div className="flex flex-col gap-6 p-8">
            <div>
                <h2 className={`${presets.preset3} text-text9`}>Font Theme</h2>
                <p className={`${presets.preset5} text-text7`}>Choose your font theme:</p>
            </div>
            <form className="flex flex-col gap-4">
                <Theme_Input handleChange={handleChange} mode="San-serif"
                    icon={san_serif_icon} value="san-serif" name="font"
                    text="Clean and modern, easy to read." current={font}
                />
                <Theme_Input handleChange={handleChange} mode="Serif"
                    icon={serif_icon} value="serif" name="font"
                    text="Classic and elegant for a timeless feel." current={font}
                />
                <Theme_Input handleChange={handleChange} mode="Monospace"
                    icon={monospace_icon} value="monospace" name="font"
                    text="Code-like, great for a technical vibe." current={font}
                />
            </form>
            <div className="xl:w-[528px] w-full flex justify-end">
                <Apply_Changes apply_changes={apply_changes} text="Apply Changes"/>
            </div>
        </div>
    )
}