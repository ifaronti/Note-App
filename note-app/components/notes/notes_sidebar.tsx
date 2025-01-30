import { note } from "../models/items";
import { cross_icon } from "../svg_assets";
import { presets } from "../text";
import useNavigation from "@/hooks/useNavigation";
import Archived from "./archived_notes";
import All_Notes from "./notes";

interface props {
    notes: note[]
}

export default function Notes_Sidebar({notes}: props) {
    const {get, set, del} = useNavigation()
    const pane = String(get('pane'))
    const title = get('title')
    
    function select_display() {
        let display
        switch (pane) {
            case 'Home':
                display = <All_Notes notes={notes}/>
                break
            case 'Archived':
                display = <Archived notes={notes}/>
                break
            default:
                display = <h2>Select A View From The Sidebar</h2>
        }
        return display
    }

    function new_note() {
        del('id')
        set('title', 'Untitled Note')
    }

    return (
        <div className="pt-5 flex-shrink-0 flex-grow-0 gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-borders w-full xl:w-[290px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
            <button disabled={title === 'Untitled Note'? true:false} onClick={new_note} className={`border-none flex-shrink-0 ${presets.preset4} bg-[#335CFF] h-16 w-16 text-white xl:w-[242px] rounded-lg xl:h-[41px]`}>
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
                {select_display()}
            </div>
        </div>
    )
}