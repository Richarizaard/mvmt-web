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
    <div className="grid grid-cols-2 py-16 gap-32 animate-fadeIn">
      {alignment === "left" ? (
        <>
          <div className="leading-normal text-lg">
            <div className="pb-4 text-5xl font-semibold ">{title}</div>
            <div>{desc}</div>
            {ctaButtons && (
              <div className="flex justify-start gap-4 py-4 text-sm">
                <button className="rounded-full border-2 border-sky-500 p-2 px-4 ease-in-out duration-500 hover:bg-sky-500 hover:text-white">
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
              <div className="flex justify-start gap-4 py-4 text-sm">
                <button className="rounded-full border-2 ease-in-out duration-500 hover:bg-sky-500 hover:text-white border-sky-500 p-2 px-4">
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
