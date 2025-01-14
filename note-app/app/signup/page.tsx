'use server'
import Form from "@/components/auth/form";
import Auth_Hero from "@/components/auth/auth_hero";
import Auth_Links from "@/components/auth/auth_links";
import {useLogin}from "@/hooks/login";


export default async function Page() {
        
    return (
        <section className="relative gap-4 w-[343px] md:w-[540px] bg-bak_g rounded-lg py-12 px-4 md:px-8 flex flex-col justify-center items-center">
            <Auth_Hero
                header="Welcome to note"
                description="Please login to continue"
            />
            <Form
                btn_text="Login"
                //@ts-expect-error
                handleSubmit={useLogin}
            />

            <Auth_Links />
        </section>
    )
}