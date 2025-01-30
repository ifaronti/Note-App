import {useEffect, useState } from "react"
import { note } from "../models/items"
import Full_Note from "./full_note"
import Delete_Or_Archive from "./archive_delete"
import Notes_Sidebar from "./notes_sidebar"
import { get_notes } from "@/hooks/get_notes"
import useSWR from "swr"
import { options } from "../sidebar"
import useNavigation from "@/hooks/useNavigation"
import { parse_query } from "./helper"

const notes_fetcher = async (parameter:string) => {
    return await get_notes(String(localStorage.getItem('token')), parameter)
}

export default function Notes_Panel() {
    const {get} = useNavigation()
    const tag = get('tag')
    const id = Number(get('id'))
    const defaultCurrent = {title:'', content:'', id:undefined, last_edited:'', tags:[]}
    const param = get('parameter')
    const [current, setCurrent] = useState<note>(defaultCurrent)
    const [patchLoad, setPatchLoad] = useState({})

    //@ts-expect-error
    const { data: notes, error, isLoading } = useSWR([parse_query(tag, param)], notes_fetcher, options)
    
    useEffect(() => {
        if (current?.id === id) {

        }
        if (!id) {
            setCurrent(defaultCurrent)
        }
        else {
            //@ts-expect-error
            setCurrent(notes?.data?.find(item => item.id == id))
        }
    },[id])

    if (isLoading) { return <p>Loading</p> }
    if(error){return <p>An error has occured</p>}

    const handleChange = (e: any) => {
        const { name, value } = e.currentTarget || e.target
        if (name == "tags") {
            setCurrent(prev => {return {...prev,tags:value.replace(' ', ",").split(',')}})
            return setPatchLoad(prev => { return { ...prev, tags: value.replace(' ', ",").split(',') } })
        
        }
        setCurrent({...current, [name]:value})
        setPatchLoad({...patchLoad, [name]:value})
    }

    return (
        <div className="w-full flex relative h-full pr-8">
            {/*//@ts-expect-error */}
            <Notes_Sidebar notes={notes?.data} />
            
            <Full_Note update_details={{ ...patchLoad, id: Number(current?.id) }} handleChange={handleChange} current={current} />
            
            <Delete_Or_Archive current={current}/>
        </div>
    )
}