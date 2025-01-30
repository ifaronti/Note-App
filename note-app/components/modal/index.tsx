import Dialog_Box from "./modal_dialog";
import { update_note } from "@/hooks/update_note";
import useNavigation from "@/hooks/useNavigation";
import { mutate } from "swr";
import { delete_note } from "@/hooks/delete_note";
import { parse_query } from "../notes/helper";

export default function Modal() {
    const { set, get, del } = useNavigation()
    const id = get('id')
    const dialog = get('dialog')
    const tag = get('tag')
    const param = get('parameter')

    async function remove_note() {
        try {
            const data = await delete_note(Number(id), String(localStorage.getItem('token')))
            if (data.success) {
                await mutate('tags')
                //@ts-expect-error
                await mutate([parse_query(tag, param)])
                set('toast', data.message)
                del('dialog')
            }
        }
        catch (err:any) {
            set('toast', err.message)
            del('dialog')
        }
    }

    async function patch_note() {
        const payload = { is_archived: true, id: Number(id) }
        try {
            const data = await update_note(payload, String(localStorage.getItem('token')))
            if (data.success) {
                set('toast', data.message)
                del('dialog')
                await mutate([parse_query('all', '')])
                set('refetch', 'archived')
            }
        }
        catch (err:any) {
            set('toast', err.message)
            del('dialog')
        }
    }

    return dialog && (
        <div className="absolute z-10 w-full h-full bg-black/50 flex items-center justify-center">
            <Dialog_Box del_note={remove_note} archive_note={patch_note} />
        </div>
    )
}