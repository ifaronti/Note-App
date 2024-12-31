import Note_Tag from "./note_tags";
import { presets } from "../text";
import { note_props } from "../models/props";

export default function Note({note, tags}: note_props) {
    return (
        <article className="flex flex-col">
            <h2 className={`${presets.preset3}`}>{note.title}</h2>
            <Note_Tag tags_arr={tags} />
            <p className={`${presets.preset6}`}>{note.lastEdited}</p>
        </article>
    )
}