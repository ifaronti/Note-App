'use client'
import Sidebar from "../sidebar";
import Notes_Panel from "../notes";
import NavBar from "../nav";
import Settings from "../settings";
import { presets } from "../text";
import Modal from "../modal";
import { useEffect} from "react";
import useNavigation from "@/hooks/useNavigation";
import Mobile_Nav from "../nav/mobile_nav/mobile_nav";
import Mobile_Hero from "./mobile_hero";
import useWindowSize from "@/hooks/windowSize";

export default function Views() {
    const { get, get_font, push } = useNavigation()
    const screen_width = useWindowSize().width
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
                "data-theme", String(localStorage.getItem('color') || 'light')
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
                display = screen_width >= 1280 &&<h2 className={`${presets.preset2} my-48 text-text9 text-center`}>Select A View From The Sidebar</h2>
        }
        return display
    }
    
    
    return (
        <section className={`h-full ${get_font()} relative w-full flex flex-col xl:flex-row`}>
            {screen_width < 1280 && <Mobile_Hero/>}
            <Modal />
            <Sidebar />
            <div className="w-full flex flex-col relative h-full">
                <NavBar/>
                <div className="h-full overflow-y-scroll no-scrollbar ">
                {panel()}
                </div>
            </div>
            <Mobile_Nav/>
        </section>

    )
}