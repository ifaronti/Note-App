import { presets } from "@/components/text"
      
export default function App_Description() {
    const description_texts = [
        'Write/store notes for academic, financial or personal purposes.',
        'Archive and restore notes, modify or delete them.',
        'You can also add tags for ease of access to specific notes.',
        'Search and find notes by title or content.'
    ]

    return (
        <div className=" flex flex-col gap-2 items-center">
            {
                description_texts.map((text, index) => {
                    return (
                        <p
                            key={index + 1}
                            className={`${presets.preset3} font-sans text-text8`}
                        >
                            {text}
                        </p>
                    )
                })
            }
        </div>
    )
}