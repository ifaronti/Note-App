import { auth_form } from "../../models/props"
import Form_Errors from "./errors"
import Email_Input from "./email_input"
import Password_Input from "./password_input"
import Form_Btn from "./form_btn"

export default function Form_Component({
    handleSubmit,
    errors,
    handleBlur,
    btn_text
}: auth_form) { 
    
    return (
        <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-4 w-full">
            <div>
                <Email_Input handleBlur={handleBlur} />
                <Form_Errors error={errors.email} text="Please enter a valid email address"/>
            </div>

            <div>
                <Password_Input handleBlur={handleBlur} label="Password" name="password" />
                <Form_Errors error={errors.password} text="Password must 8 or more characters long" />
            </div>
            <Form_Btn btn_text={btn_text} />
        </form>
    )
}