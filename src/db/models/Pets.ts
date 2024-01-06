import mongoose from "mongoose"

export interface Pets extends mongoose.Document {
   age: number
   diet: string[]
   dislikes: string[]
   image_url: string
   likes: string[]
   name: string
   owner_name: string
   poddy_trained: boolean
   species: string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const PetsSchema = new mongoose.Schema<Pets>({
   name: {
      /* The name of this pet */

      type: String,
      required: [true, "Please provide a name for this pet."],
      maxlength: [60, "Name cannot be more than 60 characters"],
   },
   owner_name: {
      /* The owner of this pet */

      type: String,
      required: [true, "Please provide the pet owner's name"],
      maxlength: [60, "Owner's Name cannot be more than 60 characters"],
   },
   species: {
      /* The species of your pet */

      type: String,
      required: [true, "Please specify the species of your pet."],
      maxlength: [40, "Species specified cannot be more than 40 characters"],
   },
   age: {
      /* Pet's age, if applicable */

      type: Number,
   },
   poddy_trained: {
      /* Boolean poddy_trained value, if applicable */

      type: Boolean,
   },
   diet: {
      /* List of dietary needs, if applicable */

      type: [String],
   },
   image_url: {
      /* Url to pet image */

      required: [true, "Please provide an image url for this pet."],
      type: String,
   },
   likes: {
      /* List of things your pet likes to do */

      type: [String],
   },
   dislikes: {
      /* List of things your pet does not like to do */

      type: [String],
   },
})

export default mongoose.models["Pets"] ?? mongoose.model<Pets>("Pets", PetsSchema)
