import useNavigation from "@/hooks/useNavigation"
import { search_icon } from "../svg_assets"
import { formEvent } from "../models/props"
import { presets } from "../text"
import useWindowSize from "@/hooks/windowSize"

export default function Search_Bar() {
    const { del, set, get } = useNavigation()
    const showSearch = get('search')
    const screen_width = useWindowSize().width

    function handleSubmit(e: formEvent) {
        del('tag')
        del('id')
        const formData = new FormData(e.currentTarget)
        set('parameter', String(formData.get("search")))
    }


    function display() {
        if (screen_width >= 1280 || showSearch) {
            return true
        }
        return false
    }
    

    return display() && (
        <form onSubmit={handleSubmit} className="h-11 w-full xl:w-[300px] flex items-center gap-2 rounded-lg px-4 border border-borders">
            
            <button type="button" className="bg-none border-none">
                {search_icon}
            </button>
            
            <input
                type="text"
                name="search"
                placeholder="Search by title, content or tags..."
                className={`border-none flex-shrink-0 bg-inherit relative w-full active:text-text9 ${presets.preset5} outline-none focus:text-text9 text-text5 focus:border-none focus:outline-none`}
            />
        </form>
    )
}