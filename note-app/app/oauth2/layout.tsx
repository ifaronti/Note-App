import Notification from "@/components/notifications"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
        <section className="bg-auth_page w-full h-full">
            {children}

            <Notification/>

        </section>
    )
}