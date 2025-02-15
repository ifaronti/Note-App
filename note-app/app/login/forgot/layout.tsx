import Notification from "@/components/notifications"


export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="w-full h-full">
        {children}
        <Notification/>
    </div>
}