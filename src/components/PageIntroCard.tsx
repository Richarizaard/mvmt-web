import { useNavigate } from 'react-router-dom'
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
  className?: string
}

const PageIntroCard = ({
  title,
  typedStrings,
  desc,
  img,
  ctaButtons = false,
  className,
}: PageIntroCardProps) => {
  const nav = useNavigate()
  const isMobile = useMediaQuery(`(max-width: ${MAX_WIDTH_PHONE})`)

  return (
    <div className="grid grid-cols-2 pt-6 pb-6 sm:pt-12">
      <div className="leading-normal col-span-2 sm:col-span-1">
        <div className="pb-2 md:pb-4 text-4xl md:text-7xl font-semibold">
          <div className="flex justify-start">{title && title}</div>
          {typedStrings && (
            <Typed
              strings={typedStrings}
              typeSpeed={typedStrings[0] === 'Movement' ? 300 : 100}
              startDelay={300}
            />
          )}
        </div>

        {desc && (
          <MvmtParagraphLarge className={'whitespace-pre-wrap'}>
            {desc}
          </MvmtParagraphLarge>
        )}
        {ctaButtons && (
          <div className="flex justify-start gap-4 py-4 text-xs lg:text-base ">
            <button
              className="rounded-full border tl:min-w-[110px] bg-sky-500 text-white p-2 px-4"
              onClick={() => nav('/new-here')}
            >
              New here?
            </button>
            <button className="rounded-full border ease-in-out duration-500 border-sky-500 hover:bg-sky-500 hover:text-white p-2 px-4">
              Get involved
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        {!isMobile && <img src={img} alt="" />}
      </div>
    </div>
  )
}

export default PageIntroCard
