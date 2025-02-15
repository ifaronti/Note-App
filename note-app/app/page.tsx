import Link from "next/link"
import { presets } from "@/components/text"
import { logo } from "@/components/svg_assets"
import App_Description from "../components/home_page/app_description"
import { Suspense } from "react"

export default function Home() {
  return (
    <Suspense>
      <main className="w-full h-screen bg-[#E0E4EA] flex items-center justify-center">
        <div className="relative gap-4 w-[343px] h-fit md:w-[540px] bg-page rounded-lg py-12 px-4 md:px-8 flex flex-col justify-center items-center">
          {logo}
          <h1 className={`${presets.preset1} font-sans text-text9`}>Welcome To My App.</h1>
          <App_Description/>
          <Link
            className={`${presets.preset3} h-10 justify-center flex items-center w-[112px] rounded-lg text-white bg-[#355CFF] text-center text-text9`}
            href={'/signup'}
          >
            Register
          </Link>

          <Link
            className={`${presets.preset3} h-10 justify-center flex items-center w-[112px] rounded-lg text-white bg-[#355CFF] text-center text-text9`}
            href={'/login'}
          >
            Login
          </Link>
        </div>
      </main>
    </Suspense>
  )
}
