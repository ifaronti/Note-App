import { presets } from "../text"

export default function Apply_Changes({apply_changes}:{apply_changes:()=>void}) {
    return (
        <button onClick={apply_changes}
            className={`
                w-[132px] hover:bg-[#2547D0] bg-[#335CFF] 
                ${presets.preset4} text-white h-[41px] rounded-lg`
            }
        >Apply Changes
        </button>
    )
}