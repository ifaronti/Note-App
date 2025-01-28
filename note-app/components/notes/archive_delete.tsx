import { presets } from "../text"
import { archive_icon, delete_icon } from "../svg_assets"
import { restore_icon } from "../svg_assets"
import { note } from "../models/items"
import useNavigation from "@/hooks/useNavigation"
import { update_note } from "@/hooks/update_note"
import { mutate } from "swr"

export default function Delete_Or_Archive({ current }: { current: note }) {
    const {set, get,del} = useNavigation()
    const pane = get('pane')

    async function delete_modal() {
        set('dialog', 'delete')
        set('id', String(current.id))
    }

    async function edit_note() {
        const bool = pane === 'Archived'? false:true
        const payload = { is_archived: bool, id: Number(current.id) }
        try {
            const data = await update_note(payload, String(localStorage.getItem('token')))
            if (data.success) {
                set('toast', data.message)
                await mutate('server-notes')
            }
        }
        catch (err:any) {
            set('toast', err.message)
        }
    }

    async function open_modal() {
        set('dialog', 'archive')
        set('id', String(current.id))
    }

    function right_bar() {
        let showBTNS
        switch (current.title) {
            case 'Untitled Note':
                showBTNS = false
                break
            case '':
                showBTNS = false
                break
            case 'select a note':
                showBTNS = false
                break
            default:
                showBTNS = true
        }
        return showBTNS
    }
    
    return (
            <div className="flex-shrink-0 flex flex-col gap-4 h-full pt-5 border-l-[1px] border-l-borders xl:pl-4 xl:w-[258px]">
                {
                    right_bar() 
                    &&
                    <button onClick={pane== 'Archived'? edit_note:open_modal} className={`${presets.preset4} xl:justify-start text-text9 xl:h-11 xl:w-[242px] xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-borders`}>
                        <span>{pane==="Archived"? restore_icon:archive_icon}</span> 
                        <span>{pane === "Archived"? "Restore Note": "Archive Note"}</span>
                    </button>
                }

                {
                    right_bar()
                    && 
                    <button onClick={delete_modal} className={`${presets.preset4} xl:justify-start text-text9 xl:w-[242px] xl:h-11 xl:gap-2 xl:flex xl:items-center xl:px-4 xl:border xl:rounded-lg xl:border-borders`}>
                        <span>{delete_icon}</span> 
                        <span className="hidden xl:block">Delete Note</span>
                    </button>
                }
            </div>
       
    )
}