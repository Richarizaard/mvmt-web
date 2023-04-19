import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ChildrenProps {
  children: ReactNode
  className?: string
}

const MvmtHeader1 = ({ children, className }: ChildrenProps) => (
  <h1
    className={twMerge(
      "font-semibold text-3xl sm:text-4xl mb-0",
      className // allow color, margin and padding overrides
    )}
  >
    {children}
  </h1>
)

export default MvmtHeader1
