import { presets } from "../text";

export default function Note_Tag({tags_arr}:{tags_arr:string[]}) {

    return <div className="xl:grid xl:grid-cols-4 w-fit gap-1">
        {
            tags_arr.map((item, index) => {
                return (
                    <span
                        className={`${presets.preset6} text-text9 bg-text2 rounded-md`}
                        key={index + 1}
                    >
                        <p className="p-1 text-center w-12 inline-block overflow-hidden whitespace-nowwrap text-ellipsis">{item}</p>
                    </span>
                )
            })
        }
    </div>
}