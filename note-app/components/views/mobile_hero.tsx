import { logo } from "../svg_assets";

export default function Mobile_Hero() {
    return (
        <div className="w-full flex-shrink-0 flex-grow-0 h-[74px] flex justify-start items-center px-4 xl:px-8 bg-mobile_hero">
            {logo}
        </div>
    )
}