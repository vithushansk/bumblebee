export default function SideBar(){
    return(
        <>
            <div className="bg-zinc-900 w-48 h-screen p-3">
                <div className="flex flex-col gap-2">
                    <div className="sideBar-link">
                        <a href="#" className="p-2">Dashboard</a>
                    </div>

                    <div className="sideBar-link">
                        <a href="#" className="p-2">New Product</a>
                    </div>

                    <div className="sideBar-link">
                        <a href="#" className="p-2">Manage Products</a>
                    </div>
                </div>
            </div>
        </>
    )
}