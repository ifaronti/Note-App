import { Suspense } from "react"
import Oauth2 from "../../components/auth/oauth2/oauth2_component"

export default function Page() {
    
    return (
        <Suspense>
            <div className="w-full h-full flex items-center justify-center">
                <Oauth2/>
            </div>
        </Suspense>
    )
}