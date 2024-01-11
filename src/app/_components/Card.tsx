import { Text } from "./Text"

interface Props {
   city: string
   cuisine: string
   name: string
   overview: string
}

export const Card = ({ city, cuisine, name, overview }: Props) => {
   return (
      <div className="bg-secondary-bg w-3/5">
         <div className="flex items-center justify-between">
            <Text>{name}</Text>
            <div>
               <Text>{city}</Text>
               <Text>{cuisine}</Text>
            </div>
         </div>
         <Text>{overview}</Text>
      </div>
   )
}
