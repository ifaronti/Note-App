import { inputEvent } from "@/components/models/props"

type inputProps = {
    handleBlur?: (e: inputEvent) => void,
    name?: string
    label?: string
}

export default function Email_Input({handleBlur}:inputProps) {
    return (
        <div className="flex flex-col-reverse w-full gap-1">
            <input
                type="email"
                placeholder="email@example.com"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                name="email"
                id="email"
                onBlur={handleBlur}
                className="h-[42px] px-4 cursor-pointer rounded-lg peer/email w-full invalid:border-[red] border border-[#cacfd8]"
            />
            <label htmlFor="email" className="text-text9 peer-invalid/email:text-red-500">Email Address</label>
        </div>
    )
}