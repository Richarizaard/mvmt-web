import { Link } from 'react-router-dom'
import SVGIcon from 'utils/Icon'
import MvmtHeader2 from 'utils/typography/MvmtHeader2'
import MvmtParagraphMedium from 'utils/typography/MvmtParagraphMedium'

interface FeatureCardProps {
  text: string
  title: string
  svg: string
  to: string
  openNewTab?: boolean
}

const FeatureCard = ({
  text,
  title,
  svg,
  to,
  openNewTab = false,
}: FeatureCardProps) => {
  return (
    <Link
      className="w-auto flex items-center flex-col p-2 m-2 cursor-pointer rounded-3xl shadow-black hover:shadow-lg group"
      to={to}
      rel="noopener noreferrer"
      target={openNewTab ? '_blank' : ''}
    >
      <SVGIcon
        name={svg}
        className="group-hover:stroke-sky-500 group-hover:fill-sky-500"
      />
      <MvmtHeader2 className="py-2 text-center">{title}</MvmtHeader2>
      <MvmtParagraphMedium className="text-center">{text}</MvmtParagraphMedium>
    </Link>
  )
}

export default FeatureCard
