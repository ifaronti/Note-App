import { formEvent, inputEvent } from "../../models/props"
import Form_Errors from "./errors"
import Email_Input from "./email_input"
import Password_Input from "./password_input"
import Form_Btn from "./form_btn"
import useNavigation from "@/hooks/useNavigation"

export type auth_form = {
    handleSubmit: (e:formEvent) => void,
    handleBlur: (e: inputEvent) => void,
    errors: { email: boolean, password: boolean }
    btn_text:string
}

export default function Form_Component({
    handleSubmit,
    errors,
    handleBlur,
    btn_text
}: auth_form) { 

    const {get_font} = useNavigation()
    
    return (
        <form onSubmit={handleSubmit} className={`pt-6 ${get_font()} flex flex-col gap-4 w-full`}>
            <div>
                <Email_Input handleBlur={handleBlur} />
                <Form_Errors text={errors.email ? "Please enter a valid email address" : ''}/>
            </div>

            <div>
                <Password_Input handleBlur={handleBlur} label="Password" name="password" />
                <Form_Errors text={errors.password ? "Password must 8 or more characters long" : ''} />
            </div>
            <Form_Btn btn_text={btn_text} />
        </form>
    )
}