import React, { useState } from 'react'
import MvmtHeader2 from 'utils/typography/MvmtHeader2'
import SVGIcon from 'utils/Icon'
import MvmtParagraphMedium from 'utils/typography/MvmtParagraphMedium'

interface DropdownTextProps {
  title: string
  text: string
}
const DropdownText = ({ title, text }: DropdownTextProps) => {
  const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <div className="grid-col-span-1">
      <div
        className="flex justify-between cursor-pointer hover:bg-gray-200 rounded-lg"
        onClick={() => setDropdown(!dropdown)}
      >
        <MvmtHeader2 className="pb-2 md:pb-4">{title}</MvmtHeader2>

        {dropdown ? (
          <SVGIcon name="chevron-up" />
        ) : (
          <SVGIcon name="chevron-down" />
        )}
      </div>
      {dropdown && (
        <div className="pt-6 md:pt-4 pb-2 md:pb-4">
          <MvmtParagraphMedium className="whitespace-pre-wrap">
            {text}
          </MvmtParagraphMedium>
        </div>
      )}
    </div>
  )
}

export default DropdownText
