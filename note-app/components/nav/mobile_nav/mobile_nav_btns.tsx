import useNavigation from "@/hooks/useNavigation";

type props = {
    link: string
    svg: React.ReactNode
}

export default function Mobile_Nav_Button({link, svg}:props) {
    const { get, push } = useNavigation()
    const color = get('color')
    const font = get('font')
    const refetch = get('refetch')
    const mobile = get('mobile')

    function set_pane() {
        if (link === 'Home') {
            return push(`/dashboard?pane=Home&font=${font}&color=${color}&tag=all&refetch=${refetch}&mobile=Home`)
        }
        if (link == 'Archived') {
           return push(`/dashboard?pane=Archived&font=${font}&color=${color}&parameter=archived&refetch=${refetch}&mobile=Archived`)
        }
        if (link === 'Search') {
            return push(`/dashboard?pane=Home&font=${font}&color=${color}&tag=all&refetch=${refetch}&search=true&mobile=Search`)
        }
        if (link === 'Settings') {
            return push(`/dashboard?pane=Settings&font=${font}&color=${color}&mobile=Settings`)
        }
        return push(`/dashboard?pane=Tags&font=${font}&color=${color}&mobile=Tags`)
    }
    
    return (
    <button onClick={set_pane} className={`h-8 w-[68px] rounded-sm md:w-20 md:h-[50px] ${mobile == link ? 'bg-[#355CFF]/20':'bg-none'} flex flex-col items-center justify-center`}>
        {svg}
        <span className="hidden md:block">{link}</span>
    </button>
    )
}