'use client'

import Tags from "../tags";
import Nav_Buttons from "../nav-buttons";

export default function Sidebar({}) {
    
    return (
        <section className="flex-col px-4 hidden xl:flex">
            <Nav_Buttons/>
        </section>
    )
}