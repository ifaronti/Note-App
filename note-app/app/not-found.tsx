export const dynamic = "force-dynamic";
import { redirect } from "next/navigation";

export default function NotFound() {
  

  return (
    <div
      className=" bg-[#E0E4EA] flex flex-col gap-5 w-full h-full items-center justify-center"
    >
      Page Not In Directory.
      <button
        onClick={redirect('/login')}
        className="bg-[#355CFF] border-none rounded-lg w-[110px]"
      >
        Login
      </button>

      <button
        onClick={redirect('/signup')}
        className="bg-[#355CFF] border-none rounded-lg w-[110px]"
      >
        Register
      </button>

    </div>
  )
}