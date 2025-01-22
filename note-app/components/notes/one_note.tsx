import Note_Tag from "./note_tags";
import { presets } from "../text";
import { note_props } from "../models/props";
import { useSearchParams } from "next/navigation";
import { format_date } from "./format_date";

export default function Note({ note, current_note }: note_props) {
    const params = useSearchParams()
    const searchParam = new URLSearchParams(params)
    const title = searchParam.get("title")

    return (
        <article onClick={() => current_note(note)}
            className={`flex rounded-lg cursor-pointer ${title === note.title? 'bg-[#F3F5F8]':''} flex-col gap-3 p-2`}
        >
            {note.title && <h3 className={`${presets.preset3}`}>{note.title}</h3>}
            {note.tags && <Note_Tag tags_arr={note.tags} />}
            {note.last_edited && <p className={`${presets.preset6}`}>{format_date(note.last_edited)}</p>}
        </article>
    )
}