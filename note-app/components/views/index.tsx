import Sidebar from "../sidebar";
import Notes_Panel from "../notes";
import NavBar from "../nav";

export default function Views() {
    
    return (
        <section className="h-full relative w-full flex">
            <Sidebar />
            <div className="w-full flex flex-col relative h-full">
                <NavBar/>
                <div className="h-full overflow-y-scroll no-scrollbar ">
                    <Notes_Panel/>
                </div>
            </div>
        </section>
    )
}