import { presets } from "../text"
import { archive_icon, delete_icon } from "../svg_assets"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { restore_icon } from "../svg_assets"
import { delete_note } from "@/hooks/delete_note"
import { note } from "../models/items"
import { mutate } from "swr"
import { update_note } from "@/hooks/update_note"

export default function Delete_Or_Archive({current}:{current:note}) {
    const params = useSearchParams()
    const searchParams = new URLSearchParams(params)
    const pane = searchParams.get('pane')
    const pathName = usePathname()
    const router = useRouter()

    async function remove_note() {
        const data = await delete_note(Number(current.id), String(localStorage.getItem('token')))
        if (data.success) {
            if (current.tags[0]) {
                await mutate('tags')
            }
            await mutate('server-notes')
            searchParams.set('toast', data.message)
            router.replace(`${pathName}?${searchParams}`)
        }
    }

    async function patch_note() {
        const bool = pane === 'Archived'? false:true
        const payload = {is_archived:bool, id:Number(current?.id)}
        const data = await update_note(payload, String(localStorage.getItem('token')))
            
        if (data.success) {
            searchParams.set('toast', data.message)
            router.replace(`${pathName}?${searchParams}`)
            await mutate('server-notes')
        }
            return
        }
    
    return (
        <div className="flex-shrink-0 flex flex-col gap-4 h-full pt-5 border-l-[1px] border-l-[#cacfd8] xl:pl-4 xl:w-[258px]">
            <button onClick={patch_note} className={`${presets.preset4} xl:justify-start xl:h-11 xl:w-[242px] xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-[#E0E4EA]`}>
                <span>{pane==="Archived"? restore_icon:archive_icon}</span> 
                <span>{pane === "Archived"? "Restore Note": "Archive Note"}</span>
            </button>

            <button onClick={remove_note} className={`${presets.preset4} xl:justify-start xl:w-[242px] xl:h-11 xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-[#E0E4EA]`}>
                <span>{delete_icon}</span> 
                <span className="hidden xl:block">Delete Note</span>
            </button>
        </div>
    )
}