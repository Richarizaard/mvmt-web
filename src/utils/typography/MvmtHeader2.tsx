import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ChildrenProps {
  children: ReactNode
  className?: string
}

const MvmtHeader2 = ({ children, className }: ChildrenProps) => (
  <h1
    className={twMerge(
      'font-semibold text-md sm:text-xl mb-0',
      className
    )}
  >
    {children}
  </h1>
)

export default MvmtHeader2
