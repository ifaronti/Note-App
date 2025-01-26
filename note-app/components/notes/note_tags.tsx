import { presets } from "../text";

export default function Note_Tag({tags_arr}:{tags_arr:string[]}) {

    return <div className="xl:grid xl:grid-cols-3 w-fit gap-1">
        {
            tags_arr.map((item, index) => {
                return (
                    <span
                        className={`${presets.preset6} w-fit px-2 text-text9 py-1 bg-text2 rounded-md`}
                        key={index + 1}
                    >
                        <p>{item}</p>
                    </span>
                )
            })
        }
    </div>
}