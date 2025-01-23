export type note = {
    title: string
    tags: string[]
    content: string
    last_edited: string
    is_archived: boolean
    id?:number
}
export type opt_note = {
    title?: string
    tags?: string[]
    content?: string
    last_edited?: string
    is_archived?: boolean
    id:number
}