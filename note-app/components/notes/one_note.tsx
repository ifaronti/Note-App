import Note_Tag from "./note_tags";
import { presets } from "../text";
import { format_date } from "./format_date";
import { note } from "../models/items";
import useNavigation from "@/hooks/useNavigation";
import useWindowSize from "@/hooks/windowSize";

type note_props = {
    note: note
}

export default function Note({ note}: note_props) {
    const { get, set } = useNavigation()
    const screen_width = useWindowSize().width
    const id = Number(get("id"))
    const color = get("color") || 'light'


    function bg() {
        if (id == note.id && color === 'light') {
            return'bg-[#F3F5F8]'
        }
        if (id == note.id && color === 'dark') {
            return'bg-[#232530]'
        }
        return 'bg-none'
    }

    function note_click() {
        set('id', String(note.id))
    }

    return (
        <article onClick={note_click}
            className={`flex rounded-lg cursor-pointer ${bg()} flex-col gap-3 p-2`}
        >
            {note.title && <h3 className={`${presets.preset3} text-text9`}>{note.title}</h3>}
            {note.tags && <Note_Tag tags_arr={note.tags} />}
            {note.last_edited && <p className={`${presets.preset6} text-t_e_d`}>{format_date(note.last_edited)}</p>}
        </article>
    )
}