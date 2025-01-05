
import { hide_icon, show_icon } from "../svg_assets"
import { toggle_props } from "../models/props"

export default function Password_Toggle({show_pass, toggle}:toggle_props) {
    return (
            <button
                onClick={toggle}
                className="bg-none, absolute border-none">{show_pass ? hide_icon : show_icon}
            </button>
    )
}