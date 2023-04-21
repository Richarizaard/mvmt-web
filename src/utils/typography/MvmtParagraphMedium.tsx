import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ChildrenProps {
  children: ReactNode
  className?: string
  color?: string
}

const MvmtParagraphMedium = ({
  children,
  className,
  color = 'black',
}: ChildrenProps) => (
  <p
    className={twMerge(
      `m-0 p-0 text-${color}`,
      'text-[14px] font-normal sm:text-[16px]',
      className
    )}
  >
    {children}
  </p>
)

export default MvmtParagraphMedium
