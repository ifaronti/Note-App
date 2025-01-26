'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { presets } from "../text";
import { search_icon, setting_icon } from "../svg_assets";
import { formEvent} from "../models/props";

export default function NavBar() {
    const pathName = usePathname()
    const params = useSearchParams()
    const search_params = new URLSearchParams(params)
    const pane = search_params.get("pane")
    const router = useRouter()

    function change_pane(current_pane: string) {
        search_params.set("pane", current_pane)
        return router.replace(`${pathName}?${search_params}`)
    }

    function handleSubmit(e: formEvent) {
        const formData = new FormData(e.currentTarget)
        search_params.set('search', String(formData.get("search")))
    }

    return (
        <nav className="h-fit px-8 xl:h-[81px] justify-between border-b-[1px] border-b-[#E0E4EA] flex xl:items-center">
            <h1 className={`${presets.preset1} text-text9`}>
                {pane === "Home"? "All Notes":pane}
            </h1>
            <div className="flex items-center gap-4">
                <form onSubmit={handleSubmit} className="h-11 w-[300px] flex items-center gap-2 rounded-lg px-4 border border-[#CACFD8]">
                    
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