import useNavigation from "@/hooks/useNavigation";
import HR_LINE from "../hr_line";
import { presets } from "../text";
import { archive_icon, delete_icon } from "../svg_assets";

type props = {
    del_note:()=>void
    archive_note:()=>void
}

export default function Dialog_Box({del_note, archive_note}:props) {
    const { get, del } = useNavigation()
    const dialog = get('dialog')

    const delete_txt = `Are you sure you want to permanently delete this note? 
                         This action cannot be undone.`

    const archive_txt = `Are you sure you want to archive this note? You can find it 
                         in the Archived Notes section and restore it anytime.`
    
    function abort() {
        del('dialog')
        del('id')
    }
    
    return (
        <div className="flex flex-col z-10 w-[343px] md:w-[440px] rounded-lg bg-dialog">

            <div className="p-4 flex gap-3">
                <span className="rounded-lg mt-1 bg-text2 flex-shrink-0 flex items-center w-10 h-10 justify-center">
                    {dialog === 'delete'? delete_icon:archive_icon}
                </span>
                <div className="flex flex-col gap-1 ">
                    <p className={`${presets.preset3} text-text9`}>{dialog === 'delete' ? 'Delete Note' : 'Archive Note'}</p>
                    <p className={`${presets.preset5} text-dialog_text`}>{dialog == 'delete'? delete_txt:archive_txt}</p>
                </div>
            </div>

            <HR_LINE />

            <div className="flex p-4 self-end gap-4">
                <button onClick={abort}
                    className={`bg-text5 border-none rounded-lg h-10 w-[78px] text-text6 ${presets.preset4}`}
                >
                    Cancel
                </button>
                <button onClick={dialog == 'delete'? del_note:archive_note}
                    className={`${presets.preset4} ${dialog === 'delete'? 'bg-red-500' :'bg-[#335CFF]'} border-none rounded-lg h-10 w-[110px] text-white`}
                >
                    {dialog == 'delete' ? 'Delete Note' : 'Archive Note'}
                </button>
            </div>
        </div>
    )
}