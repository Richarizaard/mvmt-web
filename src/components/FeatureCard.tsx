import SVGIcon from 'utils/Icon'
import MvmtHeader2 from 'utils/typography/MvmtHeader2'
import MvmtParagraphMedium from 'utils/typography/MvmtParagraphMedium'

interface FeatureCardProps {
  text: string
  title: string
  svg: string
  onClick?: () => void
}

const FeatureCard = ({ text, title, svg, onClick }: FeatureCardProps) => {
  return (
    <div
      className="w-auto flex items-center flex-col p-2 m-2 cursor-pointer rounded-3xl shadow-black hover:shadow-lg group animate-fadeIn"
      onClick={onClick}
    >
      <SVGIcon
        name={svg}
        className="group-hover:stroke-sky-500 group-hover:fill-sky-500"
      />
      <MvmtHeader2 className="py-2 text-center">{title}</MvmtHeader2>
      <MvmtParagraphMedium className="text-center">{text}</MvmtParagraphMedium>
    </div>
  )
}

export default FeatureCard
