const MvmtHeader = () => {
    const imgUrl = "/assets/test1.png"
    return (
        <>
            <div className="pb-16 w-full flex justify-between  text-base font-semibold">
                <div className="flex justify-start gap-16 items-center">
                    <img src={imgUrl} alt="" />
                    <div className="text-sky-500">
                        New here?
                    </div>
                    <div>
                        Get involved
                    </div>
                    <div>
                        Ministries
                    </div>
                    <div>
                        About us
                    </div>
                    <div>
                        Sermons
                    </div>
                    <div>
                        Events
                    </div>
                </div>
                <div>
                    <button className="rounded-lg bg-sky-500 text-white p-2 px-4">Donate</button>
                </div>
            </div>
        </>
    )
}

export default MvmtHeader