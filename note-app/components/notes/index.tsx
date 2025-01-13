'use client'

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Note from "./one_note"
import { useEffect, useState } from "react"
import { note } from "../models/items"
import { get_notes } from "@/hooks/get_notes"
import HR_LINE from "../hr_line"
import Full_Note from "./full_note"
import Delete_Or_Archive from "./archive_delete"
import Notes_Sidebar from "./notes_sidebar"

export default function Notes_Panel() {
    const [notes, setNotes] = useState<note[]>([])
    const [current, setCurrent] = useState<note|undefined>()
    
    const params = useSearchParams()
    const searchParams = new URLSearchParams(params)
    const router = useRouter()
    const pathName = usePathname()
    const pane = params.get('pane')

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

    const handleChange = (e: any) => {
        //@ts-expect-error
        setCurrent({...current, content:e.currentTarget.value})
    }
    
    const render_notes = notes.map((item, index) => {
        return item.isArchived? '':
            <div key={index+1} className={`${index+1 === notes.length? 'mb-10':''}`}>
                <Note note={item} current_note={()=>set_current(item)} />
                {index+1 === notes.length || current?.title === item.title? "": <HR_LINE/>}
            </div>
        
    })
    const render_archived = notes.map((item, index) => {
        return !item.isArchived? '':
            <div key={index+1}>
                <Note note={item} current_note={()=>set_current(item)} />
                {index+1 === notes.length || current?.title === item.title? "": <HR_LINE/>}
            </div>
        
    })

    return (
        <div className="w-full flex relative h-full pr-8">
            {/*//@ts-expect-error */}
            <Notes_Sidebar render_archived={render_archived} render_notes={render_notes}/>
            <Full_Note handleChange={handleChange} current={current} />
            <Delete_Or_Archive/>
        </div>
    )
}