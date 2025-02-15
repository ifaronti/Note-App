
export default function Layout({ children }: { children: React.ReactNode }) {
    return (

        <section className="bg-auth_page w-full h-full">
            {children}
        </section>

    )
}