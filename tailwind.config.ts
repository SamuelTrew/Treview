import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
   content: ["./src/**/*.tsx"],
   theme: {
      extend: {
         fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
         },
         colors: {
            "primary-text": "var(--primary-text)",
            "secondary-text": "var(--secondary-text)",

            "primary-bg": "var(--primary-bg)",
            "secondary-bg": "var(--secondary-bg)",
         },
      },
   },
   plugins: [],
} satisfies Config
