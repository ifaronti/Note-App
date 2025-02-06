import Nav_Buttons from "./nav-buttons";
import { logo } from "../svg_assets";
import HR_LINE from "../hr_line";
import useNavigation from "@/hooks/useNavigation";
import Tags from "./tags";
import useWindowSize from "@/hooks/windowSize";

export const options = {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
}

export default function Sidebar() {
    const { get } = useNavigation()
    const screen_width = useWindowSize().width
    const pane = get('pane')

    return (
        <section className={`flex flex-col flex-shrink-0 overflow-y-scroll no-scrollbar border-r-[0.5px] border-r-borders w-full xl:w-[272px] px-4 pt-3`}>
            
            {screen_width >= 1280 && <div className="h-[52px] xl:block hidden pt-3">{logo}</div>}

            {screen_width >= 1280 && <div className="xl:block hidden">
                <Nav_Buttons />
            </div>}

        {screen_width >= 1280 &&<div className="my-2 hidden xl:block">
            <HR_LINE/>
        </div>}
            {screen_width >= 1280 || pane == 'Tags' && <Tags/>}
        </section>
    )
}