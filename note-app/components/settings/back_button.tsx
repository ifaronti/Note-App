import useNavigation from "@/hooks/useNavigation";
import { chevy_left } from "../svg_assets";
import { presets } from "../text";

export default function Back_Button({text}:{text:string}) {
    const { del } = useNavigation()

    function go_back() {
        del('id')
        del('setting')
    }
    
    return (

            <button
                onClick={go_back}
                className={`${presets.preset4} hover:text-[#355CFF] flex items-center gap-2 bg-none border-none`}
            >
                <span>{chevy_left}</span>
                <span>{text}</span>
            </button>

    )
}