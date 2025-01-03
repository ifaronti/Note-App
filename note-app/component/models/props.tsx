import { ReactNode } from "react"
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

export type auth_hero = {
    header: string
    description:string
}

export type toggle_props = {
    show_pass: boolean
    toggle:()=>void
}

export type inputEvent = React.ChangeEvent<HTMLInputElement>;
export type formEvent = React.FormEvent<HTMLFormElement>;
type auth_info = { email: string, password: string }

export type inputProps = {
    value: string
    handleBlur: (e: inputEvent) => void,
    handleChange: (e: inputEvent) => void
    id?:string
}

export type auth_form = {
    handleSubmit: (userInfo:auth_info) => void,
    handleBlur: (e: inputEvent) => void,
    handleChange: (e: inputEvent) => void
    userInfo: auth_info
    errors: { email: boolean, password: boolean }
    btn_text:string
}

export type form_errors = {
    error: boolean
    text:string
}

export type auth_page = {
    description:string
    header:string
    btn_text:string
    handleSubmit:()=>void
}