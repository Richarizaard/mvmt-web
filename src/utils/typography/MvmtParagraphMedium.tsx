import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ChildrenProps {
  children: ReactNode
  className?: string
  color?: string
}

const MvmtParagraphMedium = ({
  children,
  className,
  color = "black",
}: ChildrenProps) => (
  <p
    className={twMerge(
      `m-0 p-0 text-${color}`,
      className, // allow color, margin and padding overrides
      "text-[14px] font-normal sm:text-[16px]"
    )}
  >
    {children}
  </p>
)

export default MvmtParagraphMedium
