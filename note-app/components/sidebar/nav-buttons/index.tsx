import useNavigation from "@/hooks/useNavigation";
import Dynamic_Theme_SVGs from "./dynamic_theme_svgs";
import { chevy_right } from "@/components/svg_assets";

export default function Nav_Buttons() {
    const { get, push } = useNavigation()
    const {home_svg, archived_svg} = Dynamic_Theme_SVGs()
    const current_pane = String(get("pane"))
    const color = String(get("color"))
    const font = String(get("font"))
    const refetch = String(get("refetch"))

    function all_notes() {
        push(`/dashboard?pane=Home&font=${font}&color=${color}&tag=all&refetch=${refetch}`)
    }

    function archived() {
        push(`
            /dashboard?pane=Archived&font=${font}&color=${color}&parameter=archived&refetch=${refetch}`)
    }

    return (
        <div className="w-full xl:flex flex-col hidden">
            <button onClick={all_notes} className={`flex px-3 w-full h-10 ${current_pane === "Home"? "bg-auth_page animate-pulse text-text9 rounded-lg":"bg-none text-text7"} justify-between items-center`}>
                <span className="flex items-center gap-2">
                    {home_svg}
                    <span>All Notes</span>
                </span>
                {current_pane == "Home" && <span>{chevy_right}</span>}
            </button>

            <button onClick={archived} className={`flex px-3 h-10 w-full ${current_pane === "Archived"? "bg-auth_page animate-pulse text-text9 rounded-lg":"bg-none text-text7"} justify-between items-center`}>
                <span className="flex items-center gap-2">
                    {archived_svg}
                    <span>Archived Notes</span>
                </span>
                {current_pane == "Archived" && <span>{chevy_right}</span>}
            </button>
        </div>
    )
}