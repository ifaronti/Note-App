import { chevy_right } from "../svg_assets"
import { tag_svg } from "../svg_assets"

type props = {
    tag_click: (tag_name:string) => void
    tag_name:string
}

export default function One_Tag({ tag_name, tag_click }: props) {

    return (
        <button onClick={()=>tag_click(tag_name)} className="border-none rounded-lg px-[12px] bg-none w-full flex items-center justify-between">
            <span className="flex gap-2">
                <span>{tag_svg}</span>
                <span>{tag_name}</span>
            </span>
            <span className="xl:block hidden">{chevy_right}</span>
        </button>
    )
}