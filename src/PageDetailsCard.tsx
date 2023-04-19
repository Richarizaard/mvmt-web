interface PageDetailsCardProps {
    title: string;
    desc: string;
    img?: string;
    ctaButtons?: boolean;
    alignment: "left" | "right";
}

const PageDetailsCard = ({
    title,
    desc,
    img,
    ctaButtons = false,
    alignment = "left",
}: PageDetailsCardProps) => {
    return (
        <div className="grid grid-cols-2 pt-16 gap-32">
            {alignment === "left" ? (
                <>
                    <div className="leading-normal text-lg">
                        <div className="pb-4 text-5xl font-semibold ">{title}</div>
                        <div>{desc}</div>
                        {ctaButtons && (
                            <div className="flex justify-start gap-4 py-4 font-semibold ">
                                <button className="rounded-lg border-[3px] border-sky-500 p-2 px-4">
                                    Learn more
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <img className="rounded-2xl" src={img} alt="" />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <img className="rounded-2xl" src={img} alt="" />
                    </div>
                    <div className="leading-normal text-lg">
                        <div className="pb-4 text-5xl font-semibold ">{title}</div>
                        <div>{desc}</div>
                        {ctaButtons && (
                            <div className="flex justify-start gap-4 py-4 font-semibold ">
                                <button className="rounded-lg border-[3px] border-sky-500 p-2 px-4">
                                    Learn more
                                </button>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default PageDetailsCard;
