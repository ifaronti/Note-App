import Note_Tag from "./note_tags";
import { presets } from "../text";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { format_date } from "./format_date";
import { note } from "../models/items";
import { useEffect, useState } from "react";

type note_props = {
    note: note
    current_note: (note:note)=>void
}

export default function Note({ note, current_note }: note_props) {
    const [theme, setTheme] = useState('')
    const params = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    const searchParam = new URLSearchParams(params)
    const title = searchParam.get("title")
    const color = String(searchParam.get("color")) || 'light'


    function bg() {
        if (title == note.title && color === 'light') {
            return'bg-[#F3F5F8]'
        }
        if (title == note.title && color === 'dark') {
            return'bg-[#232530]'
        }
        return 'bg-none'
    }

    return (
        <article onClick={() => current_note(note)}
            className={`flex rounded-lg cursor-pointer ${bg()} flex-col gap-3 p-2`}
        >
            {note.title && <h3 className={`${presets.preset3} text-text9`}>{note.title}</h3>}
            {note.tags && <Note_Tag tags_arr={note.tags} />}
            {note.last_edited && <p className={`${presets.preset6} text-t_e_d`}>{format_date(note.last_edited)}</p>}
        </article>
    )
}