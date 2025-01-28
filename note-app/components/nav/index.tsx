'use client'

import { presets } from "../text";
import { search_icon, setting_icon } from "../svg_assets";
import { formEvent } from "../models/props";
import useNavigation from "@/hooks/useNavigation";

export default function NavBar() {
    const {set, get} = useNavigation()
    const pane = get("pane")


    function change_pane(current_pane: string) {
        set("pane", current_pane)
    }

    function handleSubmit(e: formEvent) {
        const formData = new FormData(e.currentTarget)
        set('search', String(formData.get("search")))
    }

    return (
        <nav className="h-fit px-8 xl:h-[81px] justify-between border-b-[1px] border-b-borders flex xl:items-center">
            <h1 className={`${presets.preset1} text-text9`}>
                {pane === "Home"? "All Notes":pane}
            </h1>
            <div className="flex items-center gap-4">
                <form onSubmit={handleSubmit} className="h-11 w-[300px] flex items-center gap-2 rounded-lg px-4 border border-borders">
                    
                    <button type="button" className="bg-none border-none">
                        {search_icon}
                    </button>
                   
                    <input
                        type="text"
                        name="search"
                        placeholder="Search by title, content or tags..."
                        className={`border-none bg-inherit relative w-full active:text-text9 ${presets.preset5} outline-none focus:text-text9 text-text5 focus:border-none focus:outline-none`}
                    />
                </form>

                <button onClick={()=>change_pane("Settings")} className="bg-none border-none">
                    {setting_icon}
                </button>
            </div>
        </nav>
    )
}