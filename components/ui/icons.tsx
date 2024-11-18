import { LucideIcon, LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]) as LucideIcon

  return <LucideIcon {...props} />
}