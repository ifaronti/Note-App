import { auth_form, formEvent} from "../../models/props"
import Form_Errors from "./errors"
import Email_Input from "./email_input"
import Password_Input from "./password_input"

export default function Form_Component({ handleSubmit, userInfo, handleChange,
    errors, handleBlur, btn_text }: auth_form) { 
    
    
    
    return (
        <form action={handleSubmit} className="pt-6 flex flex-col gap-4 w-full">
            <div>
                <Email_Input
                    handleBlur={handleBlur}
                    handleChange={ handleChange} 
                    value={userInfo.email}
                />
                <Form_Errors error={errors.email} text="Please enter a valid email address" />
            </div>

            <div>
                <Password_Input
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={userInfo.password}
                />
            
                <Form_Errors error={errors.password} text="Password must 8 or more characters long" />
            </div>
            <button type="button" className="w-full hover:bg-[#2547D0] border h-10 rounded-lg text-white bg-[#335CFF]">{btn_text}</button>
        </form>
    )
}