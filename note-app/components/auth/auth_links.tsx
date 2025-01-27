'use client'
import Link from "next/link"
import { presets } from "../text"
import { google_logo } from "../svg_assets"
import { usePathname } from "next/navigation"

export default function Auth_Links({oauth_link}:{oauth_link:string}) {
    const pathName = usePathname()

    return (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <p className={`${presets.preset5} text-text6`}>Or login with:</p>
                <Link
                    href={oauth_link}
                    className={`text-text9 h-[48px] rounded-lg border border-[#E0E4EA] w-full flex gap-3 items-center justify-center cursor-pointer font-medium text-[1rem]`}
                >
                    <div>{google_logo}</div>
                    Github
                </Link>

            <hr className="w-full h-[1px] bg-[#E0E4EA]"/>
            <div className={`${presets.preset5}`}>
                <Link className="flex gap-1" href={pathName.includes("login") ? "/signup" : "/login"}>

                    <p className="text-text6">
                        {pathName.includes("login") ?
                            "No account yet? "
                            :
                            "Already have an account? "}
                    </p>

                    <p>
                        {pathName.includes("login") ?
                            "Signup"
                            :
                            "Login"}
                    </p>
                </Link>
            </div>
        </div>
    )
}