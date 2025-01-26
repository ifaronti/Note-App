import { useSearchParams, useRouter, usePathname } from "next/navigation"
import Note from "./one_note"
import {useState } from "react"
import { note } from "../models/items"
import HR_LINE from "../hr_line"
import Full_Note from "./full_note"
import Delete_Or_Archive from "./archive_delete"
import Notes_Sidebar from "./notes_sidebar"
import { get_notes } from "@/hooks/get_notes"
import useSWR from "swr"
import { options } from "../sidebar"

const notes_fetcher = async () => {
    return await get_notes(String(localStorage.getItem('token')))
}

export default function Notes_Panel() {
    //@ts-expect-error
    const [current, setCurrent] = useState<note>({title:'select a note', content:'', tags:['select a note'], last_edited:'select a note'})
    const [patchLoad, setPatchLoad] = useState({})
    const searchParams = new URLSearchParams(useSearchParams())
    const router = useRouter()
    const pathName = usePathname()

    const { data: notes, error, isLoading } = useSWR('server-notes', notes_fetcher, options)
    
    if (isLoading) { return <p>Loading</p> }
    if(error){return <p>An error has occured</p>}

    const set_current = (note:note) => {
        setCurrent(note)
        searchParams.set("title", note.title)
        router.replace(`${pathName}?${searchParams}`)
    }

    function new_note() {
        const empty_note ={title: 'Untitled Note', tags: [], content: '', last_edited: 'Not yet saved', is_archived: false}
        setCurrent(empty_note)
        // setNotes(prev=>[{...empty_note, last_edited:''}, ...prev])
        searchParams.set('title', empty_note.title)
        router.replace(`${pathName}?${searchParams}`)
    }

    function cancel() {
        //@ts-expect-error
        setCurrent(notes.data[0])
        searchParams.set('title', String(notes?.data[0].title))
        router.replace(`${pathName}?${searchParams}`)
    }

    const handleChange = (e: any) => {
        const { name, value } = e.currentTarget || e.target
        if (name == "tags") {
            setCurrent(prev => {return {...prev,tags:value.replace(' ', ",").split(',')}})
            return setPatchLoad(prev => { return { ...prev, tags: value.replace(' ', ",").split(',') } })
        
        }
        setCurrent({...current, [name]:value})
        setPatchLoad({...patchLoad, [name]:value})
    }
        
    const render_notes = notes?.data?.map((item, index) => {
        return (
            item.is_archived ? '' :
            (
                <div key={index+1} className={`${index+1 === notes.data.length? 'mb-10':''}`}>
                    <Note note={item} current_note={()=>set_current(item)} />
                    {index+1 === notes.data.length || current?.title === item.title? "": <HR_LINE/>}
                </div>
            )
        )
        
    })

    const render_archived = notes?.data?.map((item, index) => {
        return !item.is_archived? '':
            <div key={index+1}>
                <Note note={item} current_note={()=>set_current(item)} />
                {index+1 === notes.data.length || current?.title === item.title? "": <HR_LINE/>}
            </div>
    })

    return (
        <div className="w-full flex relative h-full pr-8">
            {/*//@ts-expect-error */}
            <Notes_Sidebar create_note={new_note} render_archived={render_archived} render_notes={render_notes} />
            <Full_Note cancel={cancel} update_details={{...patchLoad, id:Number(current?.id)}} handleChange={handleChange} current={current} />
            <Delete_Or_Archive current={current}/>
        </div>
    )
}