import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function useNavigation() {
    const pathname = usePathname()
    const router = useRouter()
    const params = new URLSearchParams(useSearchParams())
    const font = params.get('font')

    function set_replace(query:string, value:string) {
        params.set(query, value)
        router.replace(`${pathname}?${params}`)
    }

    function get_query(query: string) {
        return params.get(query)
    }

    function nav_to(path: string) {
        router.push(path)
    }
    
    function replace(path: string) {
        router.replace(`${pathname}?${path}`)
    }
    
    function del_query(query:string) {
        params.delete(query)
        router.replace(`${pathname}?${params}`)
    }

    function switch_font() {
        if (font === 'san-serif' || !font) {
            return 'font-sans'
        }
        if (font === 'serif') {
            return 'font-serif'
        }
        if (font === 'monospace') {
            return 'font-mono'
        }
    }

    return {
        set: set_replace,
        get: get_query,
        push: nav_to,
        del: del_query,
        replace: replace,
        get_font:switch_font
    }
}