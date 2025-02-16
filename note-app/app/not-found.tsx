export const dynamic = "force-dynamic";
import Link from "next/link";

export default function NotFound() {
  

  return (
    <div
      className=" bg-[#E0E4EA] flex flex-col gap-5 w-full h-full items-center justify-center"
    >
      Page Not In Directory.
      <Link 
        href={'/'}
        className="bg-[#355CFF] text-white flex items-center justify-center border-none h-10 rounded-lg w-[110px]"
      >
        Home
      </Link >

      <Link
        href={'/signup'}
        className="bg-[#355CFF] text-white flex items-center justify-center border-none rounded-lg h-10 w-[110px]"
      >
        Register
      </Link >

      <Link
        href={'/login'}
        className="bg-[#355CFF] text-white flex items-center justify-center border-none rounded-lg h-10 w-[110px]"
      >
        Login
      </Link >

    </div>
  )
}