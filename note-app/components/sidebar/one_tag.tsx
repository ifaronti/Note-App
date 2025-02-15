import { presets } from "../text"
import useNavigation from "@/hooks/useNavigation"
import { chevy_right } from "../svg_assets"

type props = {
    tag_name:string
}

export default function One_Tag({ tag_name }: props) {
    const { set, get, del } = useNavigation()
    const current_tag = String(get('tag'))


    const tag_svg =
        <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-[15px] xl:h-[15px] w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path className={current_tag == tag_name? 'stroke-[#355CFF]':'stroke-text4 xl:stroke-text9'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z" clipRule="evenodd" />
            <path className={current_tag == tag_name? 'stroke-[#355CFF]':'stroke-text4 xl:stroke-text9'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z" clipRule="evenodd" />
        </svg>


    function change_tag(tag_name: string) {
        set("tag", tag_name)
        del('parameter')
    }

    return (
        <button onClick={()=>change_tag(tag_name)} className={`border-none ${presets.preset4} text-text9 ${current_tag === tag_name? 'animate-pulse':''} rounded-lg bg-none w-full flex items-center justify-between`}>
            <span className="flex items-center capitalize gap-2">
                <span>{tag_svg}</span>
                <span>{tag_name}</span>
            </span>
            {current_tag === tag_name && <span>{chevy_right}</span>}
        </button>
    )
}