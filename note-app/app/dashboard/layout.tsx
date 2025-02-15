import { Suspense } from "react"
export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <section className="w-full bg-page h-full">
            {children}
        </section>
    )
}