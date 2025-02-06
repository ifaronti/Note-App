import useSWR from "swr";
import useNavigation from "@/hooks/useNavigation";
import One_Tag from "./one_tag";
import { get_tags } from "@/hooks/get_tags";
import { options } from ".";
import HR_LINE from "../hr_line";
import { presets } from "../text";

const tags_fetcher = async () => {
    return await get_tags(String(localStorage.getItem('token')))
}

export default function Tags(){
    const {get} = useNavigation()
    const tag = get('tag')
    const { data, error } = useSWR('tags', tags_fetcher, options)   
    
    const all_tags= data?.tags?.map((item, index) => {         
        return (
            <div key={index+1} className={`w-full xl:w-[240px] items-center justify-center px-3 rounded-lg h-10 flex flex-col ${tag === item? 'xl:bg-auth_page':''}`}>
                <One_Tag tag_name={item} />
                {index+1 === data?.tags.length ? '':<span className="w-full pt-3 block xl:hidden"><HR_LINE/></span>}
            </div>
        )
    })

    return (
        <div className={`w-full flex-shrink-0 h-full xl:h-[unset] flex gap-2 xl:w-[240px] flex-col`}>
            <h1 className={`${presets.preset1} xl:hidden px-3 block mb-4`}>Tags</h1>
            <span className={`${presets.preset4} w-full xl:block hidden text-text4 px-3 self-start`}>Tags</span>
            {all_tags}
        </div>
    )
}