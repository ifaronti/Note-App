import Auth_Hero from "./auth_hero"
import Form from "./form"
import Auth_Links from "./auth_links"
import { auth_page } from "../models/props"

export default function Authentication({
    description, header, btn_text, handleSubmit }: auth_page) {

    return (
        <section>
            <div className="w-[343px] md:w-[540px] rounded-lg bg-bak_g flex flex-col gap-4 items-center py-12 px-4 md:px-8">
                <Auth_Hero header={header} description={description} />
                <Form btn_text={btn_text} handleSubmit={handleSubmit} />
                <Auth_Links/>
            </div>
        </section>
    )
}
