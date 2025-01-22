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
    //@ts-expect-error
    const [current, setCurrent] = useState<note>({})
    
    const params = useSearchParams()
    const searchParams = new URLSearchParams(params)
    const router = useRouter()
    const pathName = usePathname()
    const renotes = searchParams.get('renotes')
    const fetch_notes = renotes === 'true'? true:false

    const set_current = (note:note) => {
        searchParams.set("title", note.title)
        setCurrent(note)
        return router.replace(`${pathName}?${searchParams}`)
    }

    function new_note() {
        const empty_note ={title: 'Untitled Note', tags: [], content: '', last_edited: 'Not yet saved', is_archived: false}
        setCurrent(empty_note)
        setNotes(prev=>[{...empty_note, last_edited:''}, ...prev])
        searchParams.set('title', empty_note.title)
        router.replace(`${pathName}?${searchParams}`)
    }
    
    useEffect(() => {
        const set_notes = async () => {
            const data = await get_notes(String(localStorage.getItem('token')), fetch_notes)
            setNotes(data.data)
            setCurrent(data.data[0])
            searchParams.set('title', data.data[0].title)
            return
        }
        set_notes()
    }, [renotes])

    const handleChange = (e: any) => {
        const { name, value } = e.currentTarget || e.target
        if (name == "tags") {
            return setCurrent(prev => {
                return {
                    ...prev,
                    tags:value.replace(' ', ",").split(',')
                }
            })
        }
        setCurrent({...current, [name]:value})
    }
        
    const render_notes = notes.map((item, index) => {
        return (
            item.is_archived ? '' :
            (
                <div key={index+1} className={`${index+1 === notes.length? 'mb-10':''}`}>
                    <Note note={item} current_note={()=>set_current(item)} />
                    {index+1 === notes.length || current?.title === item.title? "": <HR_LINE/>}
                </div>
            )
        )
        
    })

    const render_archived = notes.map((item, index) => {
        return !item.is_archived? '':
            <div key={index+1}>
                <Note note={item} current_note={()=>set_current(item)} />
                {index+1 === notes.length || current?.title === item.title? "": <HR_LINE/>}
            </div>
    })

    return (
        <div className="w-full flex relative h-full pr-8">
            {/*//@ts-expect-error */}
            <Notes_Sidebar create_note={new_note} render_archived={render_archived} render_notes={render_notes} />
            <Full_Note update_details={current} handleChange={handleChange} current={current} />
            <Delete_Or_Archive/>
        </div>
    )
}