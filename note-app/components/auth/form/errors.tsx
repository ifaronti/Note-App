import { presets } from "@/components/text"
import useNavigation from "@/hooks/useNavigation"

export type form_errors = {
    error: boolean
    text:string
}

export default function Form_Errors({ error, text }: form_errors) {
    const { get } = useNavigation()
    const toast = get('toast')
    const t_color = toast?.includes('-red') ? 'text-green-500' : 'text-red-500'
    
    const info_svg = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24"><path className={`${toast?.includes('-red')? 'stroke-red-500':'stroke-green-500'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063" /></svg>

    return error &&
        <p
        className={`${presets.preset6} ${t_color} flex items-center gap-1`}
        >
            {info_svg} {text}
        </p>
}