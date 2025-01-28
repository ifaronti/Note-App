import { note } from "../models/items";
import { cross_icon } from "../svg_assets";
import { presets } from "../text";
import useNavigation from "@/hooks/useNavigation";

interface props {
    render_archived: note[]
    render_notes: note[]
    create_note:()=>void
}

export default function Notes_Sidebar({ render_archived, create_note, render_notes }: props) {
    const {get} = useNavigation()
    const pane = String(get('pane'))
    const title = get('title')
    
    function select_display() {
        let display
        switch (pane) {
            case 'Home':
                display = render_notes
                break
            case 'Archived':
                display = render_archived
                break
            default:
                display = <h2>Select A View From The Sidebar</h2>
        }
        return display
    }

    return (
        <div className="pt-5 flex-shrink-0 flex-grow-0 gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-[#E0E4EA] w-full xl:w-[290px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
            <button disabled={title === 'Untitled Note'? true:false} onClick={create_note} className={`border-none flex-shrink-0 ${presets.preset4} bg-[#335CFF] h-16 w-16 text-white xl:w-[242px] rounded-lg xl:h-[41px]`}>
                <span className="hidden xl:block">+ Create New Note</span>
                <span className="block xl:hidden">{cross_icon}</span>
            </button>
            {pane?.includes("Archived") &&
                <p className={`${presets.preset5} text-text7`}>
                    All your archived notes are stored here. You can restore or delete them anytime.
                </p>
            }
            {title === 'Untitled Note' &&
                        <article className={`rounded-lg bg-[#F3F5F8] flex-col gap-3 p-2`}>
                            <h3 className={`${presets.preset3}`}>Untitled note</h3>
                        </article>
            }
            <div className="w-full h-full">
                {/*//@ts-expect-error */}
                {select_display()}
            </div>
        </div>
    )
}