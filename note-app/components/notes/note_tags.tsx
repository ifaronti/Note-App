import { note_tags_props } from "../models/props";
import { presets } from "../text";

export default function Note_Tag({tags_arr}:note_tags_props) {

    return <div className="xl:grid xl:grid-cols-3 flex gap-1">
        {
            tags_arr.map(item => {
                return (
                    <p className={`${presets.preset6} bg-[#E0E4EA] rounded-lg`}>{item}</p>
                )
            })
        }
    </div>
}