import Typed from "react-typed";
import useMediaQuery from "../utils/hooks/useMediaQuery";
import MvmtParagraphMedium from "../utils/typography/MvmtParagraphMedium";
import MvmtParagraphLarge from "../utils/typography/MvmtPargraphLarge";

export const MAX_WIDTH_PHONE = "639px";

interface PageIntroCardProps {
  title: string;
  typedStrings: string[];
  desc: string;
  img?: string;
  ctaButtons?: boolean;
  alignment: "left" | "right";
}

const PageIntroCard = ({
  title,
  typedStrings,
  desc,
  img,
  ctaButtons = false,
  alignment = "left",
}: PageIntroCardProps) => {
  const isMobile = useMediaQuery(`(max-width: ${"640px"})`);

  return (
    <div className="grid grid-cols-2 pt-16">
      {alignment === "left" ? (
        <>
          <div className="leading-normal col-span-2 sm:col-span-1">
            <div className="pb-2 md:pb-4 text-4xl md:text-7xl font-semibold ">
              {title + "\n"}
              <Typed strings={typedStrings} typeSpeed={200} startDelay={750} />
            </div>

            <MvmtParagraphLarge>{desc}</MvmtParagraphLarge>
            {ctaButtons && (
              <div className="flex justify-start gap-4 py-4 text-xs lg:text-base ">
                <button className="rounded-full border tl:min-w-[110px] bg-sky-500 text-white p-2 px-4">
                  New here?
                </button>
                <button className="rounded-full border ease-in-out duration-500 border-sky-500 hover:bg-sky-500 hover:text-white p-2 px-4">
                  Get involved
                </button>
              </div>
            )}
          </div>
          {!isMobile && <img src={img} alt="" />}
        </>
      ) : (
        <>
          {!isMobile && <img src={img} alt="" />}
          <div className="leading-normal col-span-2 sm:col-span-1">
            <div className="pb-2 md:pb-4 text-4xl md:text-7xl font-semibold ">{title}</div>
            <MvmtParagraphLarge>{desc}</MvmtParagraphLarge>
            {ctaButtons && (
              <div className="flex justify-start gap-4 py-4 text-xs lg:text-base ">
                <button className="rounded-lg border-[3px] tl:min-w-[110px] bg-sky-500 text-white p-2 px-4">
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
