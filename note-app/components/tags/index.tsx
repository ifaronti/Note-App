'use client'

import One_Tag from "./one_tag";
import HR_LINE from "../hr_line";
import { presets } from "../text";
import { GetTags } from "@/hooks/get_tags";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Tags() {
    const [tagsArr, setTagsArr] = useState<string[]>([])
    const searchParams = new URLSearchParams(useSearchParams())
    const current_tag = searchParams.get('tag')
    const retags = searchParams.get('retags')
    const refetch_tags = retags === "true" ? true : false
    
    useEffect(() => {
        const get_tags = async () => {
            const data = await GetTags(String(localStorage.getItem('token')), refetch_tags)
            const newData = [...data.tags]
            setTagsArr(newData)
        }
        get_tags()
    },[retags])

    const all_tags = tagsArr.map((item, index) => {
        return (
            <div key={index+1} className={`w-full xl:w-[240px] items-center justify-center px-3 rounded-lg h-10 flex flex-col ${current_tag === item? 'bg-auth_page':''}`}>
                <One_Tag tag_name={item} />
                {index+1 === tagsArr.length ? <span className="w-full block xl:hidden"><HR_LINE/></span>:''}
            </div>
        )
    })
    
    return (
        <div className="w-full flex gap-2 xl:w-[240px] flex-col">
            <span className={`${presets.preset4} w-full text-text5 px-3 self-start`}>Tags</span>
            {all_tags}
        </div>
    )
}