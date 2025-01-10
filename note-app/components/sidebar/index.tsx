'use client'

import Tags from "../tags";
import Nav_Buttons from "../nav-buttons";
import { logo } from "../svg_assets";
import HR_LINE from "../hr_line";

export default function Sidebar() {
    
    return (
        <section className="flex-col flex-shrink-0 overflow-y-scroll pt-3 no-scrollbar border-r-[0.5px] h-full border-r-[#E0E4EA] w-[272px] px-4 hidden xl:flex">
            <div className="h-[52px] pt-3">{ logo}</div>
            <Nav_Buttons />
            <div className="my-2">
                <HR_LINE/>
            </div>
            <Tags/>
        </section>
    )
}