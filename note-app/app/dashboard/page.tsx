import Views from "@/components/views"
import { Suspense } from "react"
import Notification from "@/components/notifications"

export default function Page() {
  
    return (
        <Suspense>
            <section className="w-full h-full">
                <Views />
                <Notification/>
            </section>
        </Suspense>
    )
}