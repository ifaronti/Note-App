'use client'

import One_Tag from "./one_tag";
import HR_LINE from "../hr_line";
import { presets } from "../text";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {GetTags} from "@/hooks/get_tags";
import { useEffect, useState } from "react";

export default function Tags() {
    const [tagsArr, setTagsArr] = useState<string[]>([])
    const pathName = usePathname()
    const params = useSearchParams()
    const router = useRouter()
    const searchParams = new URLSearchParams(params)

    useEffect(() => {
        const get_tags = async () => {
            const data = await GetTags()
            const newData = [...data]
            setTagsArr(newData)
        }

        get_tags()
    },[])

    function current_tag(tag: string) {
        searchParams.set("tag", tag)
        return router.replace(`${pathName}?${tag}`)
    }

    const all_tags = tagsArr.map((item, index) => {
        return (
            <div key={index+1} className="w-full flex flex-col">
                <One_Tag
                    tag_name={item}
                    tag_click={()=>current_tag(item)}
                />
                {index+1 - tagsArr.length === 0? <HR_LINE/>:''}
            </div>
        )
    })
    
    return (
        <div className="w-full flex flex-col px-4">
            <span className={`${presets.preset4} text-text5 self-start`}>Tags</span>
            {all_tags}
        </div>
    )
}