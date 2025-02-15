import useNavigation from "@/hooks/useNavigation"
import useWindowSize from "@/hooks/windowSize"
import Delete_Or_Archive from "../archive_delete"
import { note } from "@/components/models/items"
import Back_Button from "@/components/settings/back_button"

type props = {
    create_note: () => void
    patch_note: () => void
    current: note
}

export default function Note_Actions({create_note, patch_note, current}:props) {
    const { get, del } = useNavigation()
    const screen_width = useWindowSize().width
    const pane = get('pane')
    const title = get('title')

    function cancel() {
        del('id')
        del('title')
    }

    return (
        <div className="h-[41px] xl:pb-5 flex justify-between items-center gap-4 w-full">
            {screen_width < 1280 && <Back_Button text="Go back"/>}

            <div className={`flex gap-2 text-sm`}>
                {screen_width < 1280 && <Delete_Or_Archive current={current} />}
                
                <div className="flex xl:flex-row gap-2 flex-row-reverse">
                    <button
                        disabled={pane === 'Home' ? false : true}
                        onClick={title === "Untitled Note" ? create_note : patch_note}
                        type="button"
                        className="xl:bg-[#335CFF] active:animate-bounce xl:active:animate-pulse xl:h-[41px] xl:w-[99px] text-[#355CFF] rounded-lg xl:text-white bg-none hover:text-[#2547D0] xl:hover:text-[white] border-none xl:hover:bg-[#2547D0]"
                    >
                        {pane === 'Home' ? 'Save Note' : 'Inactive'}
                    </button>
                    
                    <button
                        onClick={cancel}
                        type="button"
                        className="xl:bg-cancel xl:h-[41px] xl:w-[99px] border-none rounded-lg text-text6 "
                    >
                        Cancel
                    </button>  
                </div>
            </div>
        </div>
    )
}