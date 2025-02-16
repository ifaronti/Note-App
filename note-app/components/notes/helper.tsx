export function parse_query(tag: string, param: string) {
    //@ts-expect-error
    let query: {tag:string, parameter:string} ={}

    if (tag) {
        query.tag = tag
    }
    if (param) {
        query.parameter = param
    }
    if (!tag && !param) {
        query.tag = 'all'
    }
    return String(new URLSearchParams(query))
}