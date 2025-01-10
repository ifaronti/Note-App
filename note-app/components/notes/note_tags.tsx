import { note_tags_props } from "../models/props";
import { presets } from "../text";

export default function Note_Tag({tags_arr}:note_tags_props) {

    return <div className="xl:grid xl:grid-cols-3 flex gap-1">
        {
            tags_arr.map((item, index) => {
                return (
                    <p key={index+1} className={`${presets.preset6} py-1 bg-[#E0E4EA] text-center rounded-md`}>{item}</p>
                )
            })
        }
    </div>
}