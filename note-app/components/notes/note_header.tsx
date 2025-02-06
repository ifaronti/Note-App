import { note } from "../models/items";
import { presets } from "../text";
import { note_tag_svg, clock_icon } from "../svg_assets";
import { format_date } from "./format_date";
import { inputEvent } from "../models/props";
import { useSearchParams } from "next/navigation";

type props = { current: note , handleChange:(e:inputEvent)=>void }

export default function Note_Header({ current, handleChange }: props) {
    const title = useSearchParams().get('title')
    return (
        <>
            <input
                type="text"
                value={current?.title}
                placeholder="Enter a short descriptive title for note or select a not to modify"
                name="title"
                onChange={handleChange}
                className={`w-full bg-inherit ${current?.title == ''? 'font-normal': presets.preset1} text-text9 outline-none`}
            />

            <div className="w-full flex-shrink-0 h-[26px] flex gap-2 items-center justify-start">
                
                <span className={`flex ${presets.preset5} flex-shrink-0 items-center gap-[6px] text-t_e_d w-[115px]`}>
                    {note_tag_svg} Tags
                </span>
                <input
                    type="text"
                    value={String(current?.tags)||''}
                    name="tags"
                    onChange={handleChange}
                    placeholder="Add tags separated by commas (e.g. Work, Planning)"
                    className={`w-full h-[18px] ${presets.preset5} text-text9 bg-inherit outline-none`}
                />
            </div>

            <div className={` flex-shrink-0 w-full h-[26px] ${presets.preset5} text-t_e_d flex gap-2 items-center justify-start`}>
                <span className={`flex items-center gap-[6px] text-t_e_d w-[115px]`}>
                    {clock_icon} Last Edited
                </span>
                <span className={`${presets.preset5} ${title?.includes('Untitled')? 'text-text4':'text-t_e_d'}`}>
                    {title ==
                        "Untitled Note"
                        ?
                        'Not yet saved' : !current?.last_edited? 'No note selected': format_date(String(current?.last_edited))}
                </span>
            </div>
        </>
    )
}