import useNavigation from "@/hooks/useNavigation";
import { plus_icon } from "../svg_assets";
import { presets } from "../text";


export default function Create_Button({new_note }:{new_note:()=>void}) {
    const { get } = useNavigation()
    const title = get('title')

    const style = `border-none flex-shrink-0 ${presets.preset4} 
                   bg-[#335CFF] h-16 w-16 rounded-full text-white xl:w-[242px] 
                   xl:rounded-lg xl:h-[41px] fixed xl:relative right-8 bottom-[92px] 
                   xl:right-[unset] xl:bottom-[unset]
                   `
    
    return (
        <button
            disabled={title === 'Untitled Note' ? true : false}
            onClick={new_note}
            className={style}
        >
            <span className="hidden xl:block">+ Create New Note</span>
            <span className="block xl:hidden mx-auto w-fit">{plus_icon}</span>
        </button>
    )
}