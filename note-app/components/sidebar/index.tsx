'use client'

import Tags from "../tags";
import Nav_Buttons from "../nav-buttons";

export default function Sidebar() {
    
    return (
        <section className="flex-col border-r-[0.5px] h-full border-r-[black] w-[242px] px-4 hidden xl:flex gap-4">
            <Nav_Buttons />
            <Tags/>
        </section>
    )
}