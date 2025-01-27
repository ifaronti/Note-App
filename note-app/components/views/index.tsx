'use client'
import Sidebar from "../sidebar";
import Notes_Panel from "../notes";
import NavBar from "../nav";
import Settings from "../settings";
import { useSearchParams } from "next/navigation";
import { presets } from "../text";

export default function Views() {
    const current = useSearchParams().get('pane')

    function panel() {
        let display
        switch (current) {
            case 'Settings':
                display = <Settings />
                break
            case "Archived":
                display = <Notes_Panel />
                break
            case "Home":
                display = <Notes_Panel />
                break
            default:
                display = <h2 className={`${presets.preset2} my-48 text-text9 text-center`}>Select A View From The Sidebar</h2>
        }
        return display
    }
    
    return (
        <section className="h-full relative w-full flex">
            <Sidebar />
            <div className="w-full flex flex-col relative h-full">
                <NavBar/>
                <div className="h-full overflow-y-scroll no-scrollbar ">
                 {panel()}
                </div>
            </div>
        </section>
    )
}