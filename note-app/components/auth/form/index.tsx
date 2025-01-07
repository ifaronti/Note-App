'use client'
import Form_Component from "./form";
import { useState } from "react";
import { formEvent, inputEvent } from "@/components/models/props";

type props = {
    btn_text: string
    handleSubmit: ()=>void
}

export default function Form({btn_text, handleSubmit}:props) {
        const [errors, setErrors] = useState({ email: false, password: false })
    
        const handleBlur = (e: inputEvent) => {
            if (e.target.validity.tooShort) {
                return setErrors(prev => {
                    return {...prev, password:true}
                })
            }
            if (e.target.validity.patternMismatch) {
                return setErrors(prev => {
                    return {...prev, email:true}
                })
            }
        }
    
    return (
            <Form_Component
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                errors={errors}
                btn_text={btn_text}
            />
    )
}