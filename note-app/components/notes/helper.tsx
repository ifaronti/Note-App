export function parse_query(tag:string, param:string) {
    let query ={}

    if (tag) {
        //@ts-expect-error
        query.tag = tag
    }
    if (param) {
        //@ts-expect-error
        query.parameter = param
    }
    if (!tag && !param) {
        //@ts-expect-error
        query.tag = 'all'
    }
    return String(new URLSearchParams(query))
}