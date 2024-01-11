import Link from "next/link"

import { Button } from "./Button"

export const Header = () => {
   return (
      <div className="width-100 bg-secondary-bg flex h-20 items-center justify-between p-2">
         <Link className="text-primary-text text-4xl" href="/">
            Treview
         </Link>
         <div className="flex gap-2">
            <Button className="text-primary-text hover:text-secondary-text hover:bg-primary-bg">
               Hi
            </Button>
            <Button className="text-primary-text">Bye</Button>
         </div>
      </div>
   )
}
