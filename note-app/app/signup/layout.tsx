import Form from "@/components/auth/form";
import Auth_Hero from "@/components/auth/auth_hero";
import Auth_Links from "@/components/auth/auth_links";

export default function Layout({children}:{ children: React.ReactNode }) {

    return (
        <section className="w-full h-full bg-auth_page relative flex justify-center items-center">
            {children}
        </section>
    )
}