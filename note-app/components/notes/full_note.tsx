import { note, opt_note } from "../models/items";
import { presets } from "../text";
import HR_LINE from "../hr_line";
import Note_Header from "./note_header";
import { new_note } from "@/hooks/create_note";
import { update_note } from "@/hooks/update_note";
import { mutate } from "swr";
import useNavigation from "@/hooks/useNavigation";
import { parse_query } from "./helper";
import Note_Actions from "./notes_actions_buttons/Note_Actions_BTNs";

type props = {
    handleChange: (e:any)=>void
    current: note
    update_details: opt_note
}

export default function Full_Note({ current, handleChange, update_details }: props) {
    const { set, del, get } = useNavigation()
    const pane = get('pane')
    
    async function create_note() {
        const payload = { tags: current.tags, content: current.content, title: current.title }

        try {
            const data = await new_note(payload, String(localStorage.getItem('token')))
            set('toast', data.message)
            del('title')
            await mutate([parse_query('all', '')])
            if (payload.tags[0]) {
                await mutate('tags')
            }
            return
        }
        catch (err:any) {
            set('toast', err.message + ' -red')
        }
    }

    async function patch_note() {
        try {
            const data = await update_note(update_details, String(localStorage.getItem('token')))
            set('toast', data.message)
            await mutate([parse_query('all', '')])
            if (update_details.tags) {
                await mutate('tags')
            }
            return
        }
        catch (err:any) {
            set('toast', err.message+' -red')
        }
    }
    
    return (
        <div className={`flex-col-reverse flex xl:flex-col w-full px-4 xl:px-8 py-5 gap-4 xl:border-r-borders`}>
            <div className="w-full h-full flex-col flex gap-4">
                <Note_Header handleChange={handleChange} current={current} />
                <HR_LINE />
                <textarea
                    onChange={handleChange}
                    value={String(current?.content)}
                    name="content"
                    id="content"
                    className={`w-full bg-inherit flex-grow-0 outline-none resize-none ${presets.preset5} text-text8 h-full overflow-y-scroll no-scrollbar`}
                />
            </div>
            <HR_LINE />
            <Note_Actions create_note={create_note} patch_note={patch_note} current={current}/>
        </div>
    )
}