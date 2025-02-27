

export default function Form_Btn({ btn_text, }: { btn_text: string }) {
    return (
        <button type="submit" className="w-full hover:bg-[#2547D0] border-none focus:animate-pulse active:animate-pulse border h-10 rounded-lg text-white bg-[#335CFF]">
            {btn_text}
        </button>
    )
}