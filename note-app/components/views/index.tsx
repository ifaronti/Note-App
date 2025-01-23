'use client'
import Sidebar from "../sidebar";
import Notes_Panel from "../notes";
import NavBar from "../nav";
import Settings from "../settings";
import {useSearchParams} from "next/navigation";
import { get_notes } from "@/hooks/get_notes";
import useSWR from 'swr'

const notes_fetcher = async () => {
    return await get_notes(String(localStorage.getItem('token')))
}

export default function Views() {
    const current = useSearchParams().get('pane')
    const { data: notes, error } = useSWR('server-notes', notes_fetcher)
    
    return (
        <section className="h-full relative w-full flex">
            <Sidebar />
            <div className="w-full flex flex-col relative h-full">
                <NavBar/>
                <div className="h-full overflow-y-scroll no-scrollbar ">
     
                    {current !== "Settings" && <Notes_Panel />}
                    {current === "Settings" && <Settings/>}
                </div>
            </div>
        </section>
    )
}