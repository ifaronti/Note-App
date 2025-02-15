
import Form from "@/components/auth/form";
import Auth_Hero from "@/components/auth/auth_hero";
import Auth_Links from "@/components/auth/auth_links";
import { Suspense } from "react";

export default async function Page() {
        
    return (
        <Suspense>
            <section className="relative gap-4 w-[343px] md:w-[540px] bg-page rounded-lg py-12 px-4 md:px-8 flex flex-col justify-center items-center">
                <Auth_Hero
                    header="Welcome to note"
                    description="Sign up to start organizing your notes and boost your productivity."
                />
                <Form btn_text="Signup"/>
                <Auth_Links oauth_link={String(process.env.oauth_link)} />
            </section>
        </Suspense>
    )
}