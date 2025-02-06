export const dynamic = "force-dynamic";
import Link from "next/link";

export default function NotFound() {
  

  return (
    <div
      className=" bg-[#E0E4EA] flex flex-col gap-5 w-full h-full items-center justify-center"
    >
      Page Not In Directory.
      <Link 
        href={'/login'}
        className="bg-[#355CFF] border-none rounded-lg w-[110px]"
      >
        Login
      </Link >

      <Link
        href={'/signup'}
        className="bg-[#355CFF] border-none rounded-lg w-[110px]"
      >
        Register
      </Link >

    </div>
  )
}