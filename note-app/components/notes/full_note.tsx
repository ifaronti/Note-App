import { note } from "../models/items";
import { presets } from "../text";
import HR_LINE from "../hr_line";
import Note_Header from "./note_header";

type props = {
    handleChange: (e:any)=>void
    current: note
}

export default function Full_Note({ current, handleChange }: props) {
    
    return (
        <form className="flex flex-col w-full  px-6 py-5 gap-4 border-r-[#CACFD8]">
            <input
                type="text"
                value={current.title}
                name="title"
                onChange={handleChange}
                className={`w-full ${presets.preset1} text-text9 outline-none`}
            />
            <Note_Header handleChange={handleChange} current={current} />
            <HR_LINE />
            <textarea
                onChange={handleChange}
                value={current.content}
                name="content"
                id="content"
                className={`w-full flex-grow-0 outline-none resize-none ${presets.preset5} text-text8 h-full overflow-y-scroll no-scrollbar`}
            />
            <HR_LINE />
            <div className="h-[41px] pb-5 flex gap-4 w-full">
                <button type="button" className="xl:bg-[#335CFF] h-[41px] w-[99px] rounded-lg text-white bg-none border-none hover:bg-[#2547D0]">Save Note</button>
                <button type="button" className="xl:bg-[#F3F5F8] h-[41px] w-[99px] bg-none border-none rounded-lg text-text6 ">Cancel</button>
            </div>
        </form>
    )
}