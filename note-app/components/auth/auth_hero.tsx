import { logo } from "../svg_assets";
import { presets } from "../text";

type auth_hero = {
    header: string
    description:string
}

export default function Auth_Hero({header, description}:auth_hero) {
    
    return (
        <article className="flex w-full justify-center items-center flex-col gap-4">
            {logo}
            <div role="presentation" className="flex flex-col items-center justify-center w-full">
                <h1 className={`${presets.preset1} mb-2 text-text9`}>{header}</h1>
                <p className={`${presets.preset5} text-text6`}>{description}</p>
            </div>
        </article>
    )
}