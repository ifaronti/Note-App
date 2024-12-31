import { nav_btn } from "../models/props"
import { presets } from "../text"

export default function Nav_Button({ sign, name, arrow_left, current_item }: nav_btn) {
    const btn_style = `
        w-full px-3 flex bg-none border-none items-center h-10 justify-between
        ${current_item === name ? 'bg-[#E0E4EA] rounded-lg' : 'bg-none'}
    `
    return (
        <button className={`${btn_style} rounded-none`}>
            <span className="flex items-center gap-2">
                <span>{sign}</span>
                <p className={`${presets.preset4}`}>{name}</p>
            </span>
            {arrow_left}
        </button>
    )
}