import { Suspense } from "react"
import Notification from "@/components/notifications"


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <Suspense>
            <section className="w-full bg-page h-full">
                {children}
                <Notification/>
            </section>
        </Suspense>
    )
}