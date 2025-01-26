'use client'
import Sidebar from "../sidebar";
import Notes_Panel from "../notes";
import NavBar from "../nav";
import Settings from "../settings";
import {useSearchParams} from "next/navigation";

export default function Views() {
    const current = useSearchParams().get('pane')
    
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