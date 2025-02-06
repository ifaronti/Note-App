'use client'

import { presets } from "../text";
import {setting_icon } from "../svg_assets";
import useNavigation from "@/hooks/useNavigation";
import Search_Bar from "./search_form";
import useWindowSize from "@/hooks/windowSize";

export default function NavBar() {
    const { set, get } = useNavigation()
    const screen_width = useWindowSize().width
    const pane = get("pane")
    const tag = get("tag")
    const setting = get('setting')
    const parameter = get("parameter")

    function nav_text() {
        let text = pane === "Home"? "All Notes":'Archived'
        if (tag !== 'all' && tag) {
            text = `Notes Tagged: ${tag}`
        }
        if (parameter !== 'archived' && parameter) {
            text = `Showing results for: ${parameter}`
        }
        if (pane == 'Settings') {
            text = pane
        }
        if (setting) {
            text = ''
        }
        return text
    }

    function change_pane(current_pane: string) {
        set("pane", current_pane)
    }

    function display() {
        if (screen_width >= 1280) {
            return true
        }
        if (screen_width < 1280 && pane !== 'Home' && pane !== 'Settings' && pane !== 'Archived') {
            return false
        }
        return true
    }

    return (
        <nav className="h-fit mt-5 md:mt-6 xl:mt-[unset] px-8 xl:h-[81px] justify-between flex-col xl:flex-row xl:border-b-[1px] xl:border-b-borders flex xl:items-center">
            {display() &&<h1 className={`${presets.preset1} text-text9`}>
                {nav_text()}
            </h1>}
            <div className="flex items-center gap-4">
               <Search_Bar/>
                <button onClick={()=>change_pane("Settings")} className="bg-none hidden xl:block border-none">
                    {setting_icon}
                </button>
            </div>
        </nav>
    )
}