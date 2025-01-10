import { FormEvent, ReactNode } from "react"
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
    current_note: (note:note)=>void
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
export type auth_info = { email: string, password: string }

export type inputProps = {
    handleBlur: (e: inputEvent) => void,
    name?:string
}

export type auth_form = {
    handleSubmit: (formData:FormData) => void,
    handleBlur: (e: inputEvent) => void,
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