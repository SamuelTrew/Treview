import { Card } from "../_components/Card"
import { Header } from "../_components/Header"

export default function Home() {
   const items = Array<number>(30).fill(0)

   return (
      <div className="bg-primary-bg">
         <Header />
         <div className="m-auto flex flex-col justify-center">
            {items.map((i, j) => {
               return (
                  <Card
                     city={`London-${j}`}
                     cuisine={`Japanese-${j}`}
                     key={i}
                     name={`Eat Tokyo-${j}`}
                     overview={`Chain of affordable Japanese restaurants, spanning globally-${j}`}
                  />
               )
            })}
         </div>
      </div>
   )
}
