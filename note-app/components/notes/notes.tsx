import Note from "./one_note";
import useNavigation from "@/hooks/useNavigation";
import { note } from "../models/items";
import HR_LINE from "../hr_line";
import { useEffect } from "react";
import { mutate } from "swr";
import { parse_query } from "./helper";

export default function All_Notes({notes}:{notes: note[]}) {
        const { get, del } = useNavigation()
        const id = Number(get('id'))
        const refetch = get('refetch')

        useEffect(() => {
        const refetcher = async ()=>{
                if (refetch === 'notes') {
                await mutate([parse_query('all', '')])
                del('refetch')
                return
                }
                return
        }
        refetcher()
        },[])
    
        const all_notes = notes?.map((item, index) => {
            return <div key={index + 1} className={`${index + 1 === notes.length ? 'mb-10' : ''}`}>
                        {index == 0 || id === item.id? "": <HR_LINE/>}
                        <Note note={item} />
                </div>
        })
        
        return all_notes
}

// setCurrent: Dispatch<SetStateAction<note>>