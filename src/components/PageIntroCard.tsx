import Typed from 'react-typed'
import useMediaQuery from 'utils/hooks/useMediaQuery'
import MvmtParagraphLarge from 'utils/typography/MvmtPargraphLarge'

export const MAX_WIDTH_PHONE = '639px'

interface PageIntroCardProps {
  title?: string
  typedStrings: string[]
  desc?: string
  img?: string
  ctaButtons?: boolean
}

const PageIntroCard = ({
  title,
  typedStrings,
  desc,
  img,
  ctaButtons = false,
}: PageIntroCardProps) => {
  const isMobile = useMediaQuery(`(max-width: ${MAX_WIDTH_PHONE})`)

  return (
    <div className="grid grid-cols-2 py-12">
      <div className="leading-normal col-span-2 sm:col-span-1">
        <div className="pb-2 md:pb-4 text-4xl md:text-7xl font-semibold whitespace-pre-wrap">
          {title && title}
          <br />
          {typedStrings && (
            <Typed strings={typedStrings} typeSpeed={200} startDelay={500} />
          )}
        </div>

        {desc && <MvmtParagraphLarge>{desc}</MvmtParagraphLarge>}
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
    </div>
  )
}

export default PageIntroCard
