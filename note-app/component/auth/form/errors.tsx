import { presets } from "@/component/text"
import { info_icon } from "@/component/svg_assets"
import { form_errors } from "@/component/models/props"

export default function Form_Errors({ error, text }:form_errors) {
    return error && <p
        className={`${presets.preset6} text-red-500`}>{info_icon} {text}</p>
}