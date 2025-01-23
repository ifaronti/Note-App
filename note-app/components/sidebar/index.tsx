import Nav_Buttons from "./nav-buttons";
import { logo } from "../svg_assets";
import HR_LINE from "../hr_line";
import { useSearchParams } from "next/navigation";
import { presets } from "../text";
import One_Tag from "./one_tag";
import useSWR from "swr";
import { GetTags } from "@/hooks/get_tags";

const tags_fetcher = async () => {
    return await GetTags(String(localStorage.getItem('token')))
}

export default function Sidebar() {
    const current_tag = useSearchParams().get('tag')
    const { data, error } = useSWR('tags', tags_fetcher)   
    
    //@ts-expect-error
    const all_tags: string[] = data?.tags.map((item, index) => {
        if (error) { return <p>An error has occured</p> }
        if (!data){return <p>Loading...</p>}
        return (
            <div key={index+1} className={`w-full xl:w-[240px] items-center justify-center px-3 rounded-lg h-10 flex flex-col ${current_tag === item? 'bg-auth_page':''}`}>
                <One_Tag tag_name={item} />
                {index+1 === data?.tags.length ? <span className="w-full block xl:hidden"><HR_LINE/></span>:''}
            </div>
        )
    })

    return (
        <section className="flex-col flex-shrink-0 overflow-y-scroll pt-3 no-scrollbar border-r-[0.5px] h-full border-r-[#E0E4EA] w-full xl:w-[272px] px-4 hidden xl:flex">
            <div className="h-[52px] pt-3">{ logo}</div>
            <Nav_Buttons />
            <div className="my-2">
                <HR_LINE/>
            </div>
            <div className="w-full flex gap-2 xl:w-[240px] flex-col">
                <span className={`${presets.preset4} w-full text-text5 px-3 self-start`}>Tags</span>
                {all_tags}
            </div>
        </section>
    )
}