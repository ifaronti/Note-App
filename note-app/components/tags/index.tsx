import One_Tag from "./one_tag";
import HR_LINE from "../hr_line";
import { presets } from "../text";

type props = {
    tags_arr: string[],
    desktop_toggle: (tag_name:string) => void
    mobile_toggle:(tag_name:string)=>void
}

export default function Tags({tags_arr, mobile_toggle, desktop_toggle}:props) {
    const all_tags = tags_arr.map((item, index) => {
        return (
            <div key={index+1} className="w-full flex flex-col">
                <One_Tag
                    tag_name={item}
                    desktop_toggle={()=>desktop_toggle(item)}
                    mobile_toggle={()=>mobile_toggle(item)}
                />
                {index+1 - tags_arr.length === 0? <HR_LINE/>:''}
            </div>
        )
    })
    
    return (
        <div className="w-full flex flex-col">
            <span className={`${presets.preset4} text-text5 self-start`}>Tags</span>
            {all_tags}
        </div>
    )
}