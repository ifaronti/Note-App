'use client'
import Sidebar from "../sidebar";
import Notes_Panel from "../notes";
import NavBar from "../nav";
import Settings from "../settings";
import { presets } from "../text";
import Modal from "../modal";
import { useEffect} from "react";
import useNavigation from "@/hooks/useNavigation";

export default function Views() {
    const {get, get_font, push} = useNavigation()
    const current_view = get('pane')

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            push('/login')
        }
        const current = document.documentElement.getAttribute('data-theme')
        if (current == localStorage.getItem('color')) {
            return
        }
        else {
            document.documentElement.setAttribute(
                "data-theme", String(localStorage.getItem('color'))
            )
        }
    }, [])

    function panel() {
        let display
        switch (current_view) {
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
        <section className={`h-full ${get_font()} relative w-full flex`}>
            <Modal/>
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