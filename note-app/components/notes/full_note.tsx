import { note, opt_note } from "../models/items";
import { presets } from "../text";
import HR_LINE from "../hr_line";
import Note_Header from "./note_header";
import { new_note } from "@/hooks/create_note";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { update_note } from "@/hooks/update_note";

type props = {
    handleChange: (e:any)=>void
    current: note
    update_details:opt_note
}

export default function Full_Note({ current, handleChange, update_details }: props) {
    const pathName = usePathname()
    const searchParams = new URLSearchParams(useSearchParams())
    const router = useRouter()
    const title = searchParams.get('title')
    
    async function create_note() {
        const data = await new_note(current, String(localStorage.getItem('token')))
        searchParams.set('toast', data.message)
        searchParams.set('retags', 'true')
        searchParams.set('renotes', 'true')
        router.replace(`${pathName}?${searchParams}`)
    }

    async function patch_note() {
        const data = await update_note(update_details, String(localStorage.getItem('token')))
        searchParams.set('toast', data.message)
        router.replace(`${pathName}?${searchParams}`)
    }
    
    return (
        <form className="flex flex-col w-full  px-6 py-5 gap-4 border-r-[#CACFD8]">
            <input
                type="text"
                value={String(current?.title)}
                name="title"
                onChange={handleChange}
                className={`w-full ${presets.preset1} text-text9 outline-none`}
            />
            <Note_Header handleChange={handleChange} current={current} />
            <HR_LINE />
            <textarea
                onChange={handleChange}
                value={String(current?.content)}
                name="content"
                id="content"
                className={`w-full flex-grow-0 outline-none resize-none ${presets.preset5} text-text8 h-full overflow-y-scroll no-scrollbar`}
            />
            <HR_LINE />
            <div className="h-[41px] pb-5 flex gap-4 w-full">
                <button onClick={title === 'Untitled Note'? create_note:patch_note} type="button" className="xl:bg-[#335CFF] h-[41px] w-[99px] rounded-lg text-white bg-none border-none hover:bg-[#2547D0]">Save Note</button>
                <button type="button" className="xl:bg-[#F3F5F8] h-[41px] w-[99px] bg-none border-none rounded-lg text-text6 ">Cancel</button>
            </div>
        </form>
    )
}