interface Props {
   children: string
   variant?: "primary" | "secondary"
}

export const Text = ({ children, variant = "primary" }: Props) => {
   const color = variant === "primary" ? "text-primary-text" : "text-secondary-text"

   return <div className={color}>{children}</div>
}
