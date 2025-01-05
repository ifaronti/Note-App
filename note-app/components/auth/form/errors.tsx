import { presets } from "@/components/text"
import { info_icon } from "@/components/svg_assets"
import { form_errors } from "@/components/models/props"

export default function Form_Errors({ error, text }:form_errors) {
    return error && <p
        className={`${presets.preset6} text-red-500 flex items-center gap-1`}>{info_icon} {text}</p>
}