import TopBar from '../../components/compMerchant/topBar'
import SideBar from '../../components/compMerchant/sideBar'

export default function Dashboard(){
    return(
        <>
            <div className="flex flex-col">
                <div>
                    <TopBar/>
                </div>

                <div className="flex">
                    <div>
                        <SideBar/>
                    </div>

                    <div className="p-5 w-full">
                        <div className="bg-zinc-100 w-full p-5 rounded-md flex gap-5">
                            <div className="bg-zinc-500 w-80 h-24 p-3 rounded-md drop-shadow-md flex items-center gap-2 justify-around">
                                <p className="text-2xl text-zinc-900 font-semibold">TOTAL PRODUCTS</p>
                                <span className="border border-r-1 h-14 border-zinc-900"></span>
                                <p className="text-4xl text-zinc-900 font-bold">10</p>
                            </div>

                            <div className="bg-zinc-500 w-80 h-24 p-3 rounded-md drop-shadow-md flex items-center gap-2 justify-around">
                                <p className="text-2xl text-zinc-900 font-semibold">TOTAL PURCHASE</p>
                                <span className="border border-r-1 h-14 border-zinc-900"></span>
                                <p className="text-4xl text-zinc-900 font-bold">10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}