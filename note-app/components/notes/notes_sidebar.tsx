import { note } from "../models/items";
import { plus_icon } from "../svg_assets";
import { presets } from "../text";
import useNavigation from "@/hooks/useNavigation";
import Archived from "./archived_notes";
import All_Notes from "./notes";
import useWindowSize from "@/hooks/windowSize";
import Create_Button from "./create_button";


interface props {
    notes: note[]
}

export default function Notes_Sidebar({notes}: props) {
    const { get, set, del } = useNavigation()
    const id = get('id')
    const pane = String(get('pane'))
    const title = get('title') 
    const screen_width = useWindowSize().width
    
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

    function display_bool() {
        if (screen_width >= 1280) {
            return true
        }
        if (screen_width < 1280 && !id) {
            return true
        }
        return false
    }

    return display_bool() &&(
        <div className="pt-5 flex-shrink-0 flex-grow-0 gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-borders w-full xl:w-[290px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
            <Create_Button new_note={new_note}/>
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