import { note } from "../models/items";
import { presets } from "../text";
import { note_tag_svg } from "../svg_assets";
import { clock_icon } from "../svg_assets";
import { format_date } from "./format_date";
import HR_LINE from "../hr_line";

type props = {
    handleChange: (e:any)=>void
    current: note | undefined
}

export default function Full_Note({ current, handleChange }: props) {
    
    const current_tags = current?.tags.map((item, index) => {
        return (
            <p key={index + 1} className={`${presets.preset5} text-text9`}>
                {index+1 == current.tags?.length? item:item+","}
            </p>
        )
    })

    return (
        <div className="flex flex-col w-full  px-6 py-5 gap-4 border-r-[#CACFD8]">
            <h2 className={`${presets.preset1}`}>{current?.title}</h2>
            <div className="w-full flex-shrink-0 h-[26px] flex gap-2 items-center justify-start">
                <span className={`flex ${presets.preset5} items-center gap-[6px] text-t_e_d w-[115px]`}>
                    {note_tag_svg} Tags
                </span>
                <span className="flex gap-1">{current_tags}</span>
            </div>
            <div className={` flex-shrink-0 w-full h-[26px] ${presets.preset5} text-t_e_d flex gap-2 items-center justify-start`}>
                <span className={`flex items-center gap-[6px] text-t_e_d w-[115px]`}>
                    {clock_icon} Last Edited
                </span>
                <span className="flex gap-1">{format_date(String(current?.lastEdited))}</span>
            </div>
            <HR_LINE />
            <textarea
                onChange={handleChange}
                value={current?.content}
                name="content"
                id="content"
                className={`w-full flex-grow-0 outline-none resize-none ${presets.preset5} text-text8 h-full overflow-y-scroll no-scrollbar`}
            />
            <HR_LINE />
            <div className="h-[41px] pb-5 flex gap-4 w-full">
                <button className="xl:bg-[#335CFF] h-[41px] w-[99px] rounded-lg text-white bg-none border-none hover:bg-[#2547D0]">Save Note</button>
                <button className="xl:bg-[#F3F5F8] h-[41px] w-[99px] bg-none border-none rounded-lg text-text6 ">Cancel</button>
            </div>
        </div>
    )
}