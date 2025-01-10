'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { cross_icon } from "../svg_assets"
import { presets } from "../text"
import Note from "./one_note"
import { useEffect, useState } from "react"
import { note } from "../models/items"
import { get_notes } from "@/hooks/get_notes"
import HR_LINE from "../hr_line"


export default function Notes_Panel() {
    const [notes, setNotes] = useState<note[]>([])
    const [current, setCurrent] = useState<note>()
    
    const params = useSearchParams()
    const searchParams = new URLSearchParams(params)
    const router = useRouter()
    const pathName = usePathname()

    const set_current = (note:note) => {
        searchParams.set("title", note.title)
        setCurrent(note)
        return router.replace(`${pathName}?${searchParams}`)
    }

    useEffect(() => {
        const set_notes = async () => {
            const data = await get_notes()
            setNotes(data)
        }
        set_notes()
    }, [])

    const render_notes = notes.map((item, index) => {
        
        return (
            <div key={index+1}>
                <Note note={item} current_note={()=>set_current(item)} />
                {index+1 === notes.length || current?.title === item.title? "": <HR_LINE/>}
            </div>
        )
    })

    return (
        <div className="w-full relative py-5 h-full">
            <div className=" gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-[#E0E4EA] w-full xl:w-[290px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
                <button className={`border-none flex-shrink-0 ${presets.preset4} bg-[#335CFF] h-16 w-16 text-white xl:w-[242px] rounded-lg xl:h-[41px]`}>
                    <span className="hidden xl:block">+ Create New Note</span>
                    <span className="block xl:hidden">{cross_icon}</span>
                </button>
                <div className="w-full h-full">
                    {render_notes}
                </div>
            </div>
        </div>
    )
}