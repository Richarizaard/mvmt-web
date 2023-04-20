import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ChildrenProps {
  children: ReactNode
  className?: string
  color?: string
}

const MvmtParagraphLarge = ({
  children,
  className,
  color = 'black',
}: ChildrenProps) => (
  <p
    className={twMerge(
      `m-0 p-0 text-${color}`,
      'text-[16px] font-normal sm:text-[18px]',
      className // allow color, margin and padding overrides
    )}
  >
    {children}
  </p>
)

export default MvmtParagraphLarge
