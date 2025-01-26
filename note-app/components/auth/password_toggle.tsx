
import { hide_icon, show_icon } from "../svg_assets"

type toggle_props = {
    show_pass: boolean
    toggle:()=>void
}

export default function Password_Toggle({show_pass, toggle}:toggle_props) {
    return (
            <button type="button"
                onClick={toggle}
                className="bg-none, absolute border-none">{show_pass ? hide_icon : show_icon}
            </button>
    )
}