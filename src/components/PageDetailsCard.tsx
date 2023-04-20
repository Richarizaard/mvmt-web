import useMediaQuery from 'utils/hooks/useMediaQuery'
import MvmtHeader3 from 'utils/typography/MvmtHeader3'
import MvmtParagraphMedium from 'utils/typography/MvmtParagraphMedium'

export const MAX_WIDTH_PHONE = '639px'

interface PageDetailsCardProps {
  title: string
  desc: string
  img?: string
  ctaButtons?: boolean
  alignment: 'left' | 'right'
  onClick?: () => void
}

const PageDetailsCard = ({
  title,
  desc,
  img,
  ctaButtons = false,
  alignment = 'left',
  onClick,
}: PageDetailsCardProps) => {
  const isMobile = useMediaQuery(`(max-width: ${MAX_WIDTH_PHONE})`)

  return (
    <div
      className="grid grid-cols-2 py-4 sm:py-8 gap-2 sm:gap-24 animate-fadeIn"
      onClick={onClick}
    >
      <div
        className={`leading-normal col-span-2 sm:col-span-1 ${
          alignment === 'left'
            ? 'order-last'
            : isMobile
            ? 'order-last'
            : 'order-first'
        }`}
      >
        <MvmtHeader3 className="pb-2 md:pb-4">{title}</MvmtHeader3>
        <MvmtParagraphMedium>{desc}</MvmtParagraphMedium>
        {ctaButtons && (
          <div className="flex justify-start gap-4 py-4 text-sm">
            <button className="rounded-full border-2 border-sky-500 p-2 px-4 ease-in-out duration-500 hover:bg-sky-500 hover:text-white">
              Learn more
            </button>
          </div>
        )}
      </div>
      <div className="col-span-2 sm:col-span-1">
        <img className="rounded-2xl" src={img} alt="" />
      </div>
    </div>
  )
}

export default PageDetailsCard
