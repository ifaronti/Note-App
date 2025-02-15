


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <section className="w-full h-full bg-auth_page relative flex justify-center items-center">
            {children}
        </section>
    )
}