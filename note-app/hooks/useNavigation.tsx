import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function useNavigation() {
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(useSearchParams())

    function set_replace(query:string, value:string) {
        params.set(String(query), String(value))
        router.replace(`${pathname}?${params}`)
    }

    function get_query(query: string) {
        return params.get(query)
    }

    function nav_to(path: string) {
        router.push(path)
    }

    function del_query(query:string) {
        params.delete(query)
        router.replace(`${pathname}?${params}`)
    }

    return {
        set: set_replace,
        get: get_query,
        push: nav_to,
        del:del_query,
    }
}