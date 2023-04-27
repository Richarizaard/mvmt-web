import React from 'react'
import MvmtHeader3 from 'utils/typography/MvmtHeader3'
import MvmtParagraphMedium from 'utils/typography/MvmtParagraphMedium'

interface ContentCardProps {
  title: string
  desc: string
  img: string
}

const ContentCard = ({ title, desc, img }: ContentCardProps) => {
  return (
    <div className="w-auto flex items-center flex-col sm:p-2 m-2 rounded-3xl">
      <img className="rounded-3xl sm:p-2 py-2" src={img} alt="" />
      <MvmtHeader3 className="pb-1 md:pb-2">{title}</MvmtHeader3>
      <MvmtParagraphMedium className="sm:p-2 py-2 whitespace-pre-wrap">
        {desc}
      </MvmtParagraphMedium>
    </div>
  )
}

export default ContentCard
