import { note } from "../models/items";
import { useSearchParams } from "next/navigation";
import { cross_icon } from "../svg_assets";
import { presets } from "../text";

interface props {
    render_archived: note[]
    render_notes: note[]
    create_note:()=>void
}

export default function Notes_Sidebar({render_archived, create_note, render_notes}:props) {
    const params = useSearchParams()
    const pane = params.get('pane')     

    return (
        <div className="pt-5 flex-shrink-0 flex-grow-0 gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-[#E0E4EA] w-full xl:w-[290px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
            <button onClick={create_note} className={`border-none flex-shrink-0 ${presets.preset4} bg-[#335CFF] h-16 w-16 text-white xl:w-[242px] rounded-lg xl:h-[41px]`}>
                <span className="hidden xl:block">+ Create New Note</span>
                <span className="block xl:hidden">{cross_icon}</span>
            </button>
            {pane?.includes("Archived") &&
                <p className={`${presets.preset5} text-text7`}>
                    All your archived notes are stored here. You can restore or delete them anytime.
                </p>
            }
            <div className="w-full h-full">
                {/*//@ts-expect-error */}
                {pane.includes("Archived")? render_archived:render_notes}
            </div>
        </div>
    )
}