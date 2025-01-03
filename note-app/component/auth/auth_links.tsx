import Link from "next/link"
import { presets } from "../text"
import { google_logo } from "../svg_assets"
import { usePathname } from "next/navigation"

export default function Auth_Links() {
    const pathName = usePathname()
    return (
        <div className="w-full ">
            <p className={`${presets.preset5} text-text6`}>Or login with:</p>
            <span className="flex gap-3">
                <span>{google_logo}</span>
                <Link href={"/"} className="text-text9 w-full h-12 rounded-lg border border-[#E0E4EA] text-center">Github</Link>
            </span>
            <span>
                <p>{ }</p>
                <Link href={pathName.includes("login") ? "/signup" : "/login"}>
                    <span>
                        <p>
                            {pathName.includes("login") ? "No account yet?" :
                                "Already have an account?"}
                        </p>
                        <p>
                            {pathName.includes("login")? "Signup":"Login"}
                        </p>
                    </span>
                </Link>
            </span>
        </div>
    )
}