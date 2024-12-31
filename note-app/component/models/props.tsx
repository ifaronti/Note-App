import React, { ReactNode } from "react"
import { note } from "./items"

export type nav_btn = {
    sign: ReactNode
    name: string
    arrow_left: ReactNode
    current_item:string
}

export type note_tags_props = {
    tags_arr: string[]
    
}



export type note_props = {
    note: note
    tags: string[]
    current_note: string
}