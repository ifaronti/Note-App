import Dialog_Box from "./modal_dialog";
import { update_note } from "@/hooks/update_note";
import useNavigation from "@/hooks/useNavigation";
import { mutate } from "swr";
import { delete_note } from "@/hooks/delete_note";

export default function Modal() {
    const { set, get, del } = useNavigation()
    const pane = get('pane')
    const id = get('id')
    const dialog = get('dialog')

    async function remove_note() {
        try {
            const data = await delete_note(Number(id), String(localStorage.getItem('token')))
            if (data.success) {
                await mutate('tags')
                await mutate('server-notes')
                set('toast', data.message)
                set('dialog', '')
                del('dialog')
            }
        }
        catch (err:any) {
            set('toast', err.message)
            set('dialog', '')
            del('dialog')
        }
    }

    async function patch_note() {
        const bool = pane === 'Archived'? false:true
        const payload = { is_archived: bool, id: Number(id) }
        try {
            const data = await update_note(payload, String(localStorage.getItem('token')))
            if (data.success) {
                set('toast', data.message)
                await mutate('server-notes')
                set('dialog', '')
                del('dialog')
            }
        }
        catch (err:any) {
            set('toast', err.message)
            set('dialog', '')
            del('dialog')
        }
    }

    return dialog && (
        <div className="absolute z-10 w-full h-full bg-black/50 flex items-center justify-center">
            <Dialog_Box del_note={remove_note} archive_note={patch_note} />
        </div>
    )
    
}