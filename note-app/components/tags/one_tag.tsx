import useWindowSize from "@/hooks/windowSize"
import { chevy_right } from "../svg_assets"
import { tag_svg } from "../svg_assets"
import { note } from "../models/items"

type props = {
    desktop_toggle: (tag_name:string) => void
    mobile_toggle: (tag_name: string) => void
    tag_name:string
}

export default function One_Tag({ tag_name, desktop_toggle, mobile_toggle  }: props) {
    const windowSize = useWindowSize()

    const click_event = windowSize.width < 1000? mobile_toggle(tag_name):desktop_toggle(tag_name)

    return (
        <button onClick={()=>click_event} className="border-none rounded-lg px-[12px] bg-none w-full flex items-center justify-between">
            <span className="flex gap-2">
                <span>{tag_svg}</span>
                <span>{tag_name}</span>
            </span>
            <span className="xl:block hidden">{chevy_right}</span>
        </button>
    )
}