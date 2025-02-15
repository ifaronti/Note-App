import { Suspense } from "react"
import Notification from "@/components/notifications"


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <section className="w-full bg-page h-full">
            {children}
            <Suspense>
                <Notification/>
            </Suspense>
        </section>
    )
}