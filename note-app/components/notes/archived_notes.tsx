import useNavigation from "@/hooks/useNavigation";
import Note from "./one_note";
import { note } from "../models/items";
import HR_LINE from "../hr_line";
import { Dispatch, SetStateAction, useEffect } from "react"; 
import { mutate } from "swr";
import { parse_query } from "./helper";

export default function Archived({notes}:{notes: note[]}) {
    const { get, del } = useNavigation()
    const id = Number(get('id'))
    const refetch = String(get('refetch'))

    useEffect(() => {
        const refetcher = async ()=>{
            if (refetch === 'archived') {
                await mutate([parse_query('', 'archived')])
                del('refetch')
                return
            }
            return
        }
        refetcher()
    },[])

    const archived_notes = notes?.map((item, index) => {
        return <div key={index + 1} className={`${index + 1 === notes.length ? 'mb-10' : ''}`}>
                    {index == 0 || id === item.id? "": <HR_LINE/>}
                    <Note note={item} />
            </div>
    })
    return archived_notes
}

// setCurrent: Dispatch<SetStateAction<note>>