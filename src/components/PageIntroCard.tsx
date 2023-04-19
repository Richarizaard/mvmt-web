import Typed from "react-typed";
interface PageIntroCardProps {
  title: string;
  desc: string;
  img?: string;
  ctaButtons?: boolean;
  alignment: "left" | "right";
}

const PageIntroCard = ({
  title,
  desc,
  img,
  ctaButtons = false,
  alignment = "left",
}: PageIntroCardProps) => {
  return (
    <div className="grid grid-cols-2 pt-16 ">
      {alignment === "left" ? (
        <>
          <div className="leading-normal ">
            <div className="pb-4 text-7xl font-semibold ">
              {title + "\n"}
              <Typed strings={["Movement"]} typeSpeed={200} />
            </div>

            <div className="text-lg">{desc}</div>
            {ctaButtons && (
              <div className="flex justify-start gap-4 py-4 ">
                <button className="rounded-full border min-w-[110px] bg-sky-500 text-white p-2 px-4">
                  New here?
                </button>
                <button className="rounded-full border ease-in-out duration-500 border-sky-500 hover:bg-sky-500 hover:text-white p-2 px-4">
                  Get involved
                </button>
              </div>
            )}
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </>
      ) : (
        <>
          <div>
            <img src={img} alt="" />
          </div>
          <div className="leading-normal">
            <div className="pb-4 text-7xl font-semibold ">{title}</div>
            <div className="text-lg">{desc}</div>
            {ctaButtons && (
              <div className="flex justify-start gap-4 py-4 ">
                <button className="rounded-lg border-[3px] min-w-[110px] bg-sky-500 text-white p-2 px-4">
                  New here?
                </button>
                <button className="rounded-lg border-[3px] ease-in-out duration-500 border-sky-500 hover:bg-sky-500 hover:text-white p-2 px-4">
                  Get involved
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PageIntroCard;
