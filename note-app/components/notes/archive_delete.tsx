import { presets } from "../text"
import { archive_icon, delete_icon } from "../svg_assets"
import { useSearchParams } from "next/navigation"
import { restore_icon } from "../svg_assets"

export default function Delete_Or_Archive() {
    const params = useSearchParams()
    const pane = params.get('pane')
    
    return (
        <div className="flex-shrink-0 flex flex-col gap-4 h-full pt-5 border-l-[1px] border-l-[#cacfd8] xl:pl-4 xl:w-[258px]">
            <button className={`${presets.preset4} xl:justify-start xl:h-11 xl:w-[242px] xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-[#E0E4EA]`}>
                <span>{pane==="Archived"? restore_icon:archive_icon}</span> 
                <span>{pane === "Archived"? "Restore Note": "Archive Note"}</span>
            </button>

            <button className={`${presets.preset4} xl:justify-start xl:w-[242px] xl:h-11 xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-[#E0E4EA]`}>
                <span>{delete_icon}</span> 
                <span className="hidden xl:block">Delete Note</span>
            </button>
        </div>
    )
}