import { presets } from "../text"
import { archive_icon, delete_icon } from "../svg_assets"
import { restore_icon } from "../svg_assets"
import { note } from "../models/items"
import useNavigation from "@/hooks/useNavigation"
import { update_note } from "@/hooks/update_note"
import { mutate } from "swr"
import { parse_query } from "./helper"

export default function Delete_Or_Archive({ current }: { current: note }) {
    const { set, get} = useNavigation()
    const pane = get('pane')
    const id = Number(get('id'))

    async function delete_modal() {
        set('dialog', 'delete')
        set('id', String(current?.id))
    }

    async function restore_note() {
        const payload = { is_archived: false, id: id }
        try {
            const data = await update_note(payload, String(localStorage.getItem('token')))
            if (data.success) {
                set('toast', data.message)
                await mutate([parse_query('', 'archived')])
                set('refetch', 'notes')
            }
        }
        catch (err:any) {
            set('toast', err.message + ' -red')
        }
    }

    async function open_modal() {
        set('dialog', 'archive')
        set('id', String(current?.id))
    }

    function right_bar() {
        if (!current?.title || current?.title === 'Untitled Note') {
            return false
        }
        return true
    }
    
    return (
            <div className="flex-shrink-0 gap-2 flex xl:flex-col xl:gap-4 xl:h-full xl:pt-5 xl:border-l-[1px] xl:border-l-borders xl:pl-4 xl:w-[258px]">
                {
                    right_bar() 
                    &&
                    <button onClick={pane== 'Archived'? restore_note:open_modal} className={`${presets.preset4} xl:justify-start border-[0px] bg-none text-text9 xl:h-11 xl:w-[242px] xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-borders`}>
                        <span>{pane==="Archived"? restore_icon:archive_icon}</span> 
                        <span className="hidden xl:block">{pane === "Archived"? "Restore Note": "Archive Note"}</span>
                    </button>
                }

                {
                    right_bar()
                    && 
                    <button onClick={delete_modal} className={`${presets.preset4} xl:justify-start text-text9 xl:w-[242px] xl:h-11 xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border-[1px] xl:rounded-lg xl:border-borders border-[0px]`}>
                        <span>{delete_icon}</span> 
                        <span className="hidden xl:block">Delete Note</span>
                    </button>
                }
            </div>
       
    )
}