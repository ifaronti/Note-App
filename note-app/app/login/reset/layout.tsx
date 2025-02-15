import React from "react";
import Notification from "@/components/notifications";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
   
            <Notification/>

        </div>
    )
}