import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: Props) => {
   return (
      <button
         {...props}
         className={`border-primary-text h-100 br-2 rounded border-2 border-solid p-2 ${className}`}
      >
         {children}
      </button>
   )
}
