import { Suspense } from "react"
import Notification from "@/components/notifications"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
        <section className="bg-auth_page w-full h-full">
            {children}
            <Suspense>
                <Notification/>
            </Suspense>
        </section>
    )
}