import { TRPCError } from "@trpc/server"
import { z } from "zod"

import { createRouter, protectedProcedure, publicProcedure } from "../trpc"
import { Pets } from "~/db/models/Pets"

export const petsRouter = createRouter({
   get: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
      try {
         const pet = await Pets.findById(input.id)
         if (!pet) {
            throw new TRPCError({
               code: "NOT_FOUND",
               message: `Could not find pet with id: ${input.id}`,
            })
         }
         return pet
      } catch (error) {
         throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Failed to make request while trying to find pet with id: ${input.id}`,
            cause: error,
         })
      }
   }),

   create: protectedProcedure
      .input(z.object({ id: z.string(), name: z.string() }))
      .mutation(async ({ input }) => {
         try {
            const pet = await Pets.findByIdAndUpdate(input.id, input, {
               new: true,
               runValidators: true,
            })
            if (!pet) {
               throw new TRPCError({
                  code: "NOT_FOUND",
                  message: `Could not find pet with id: ${input.id} to update`,
               })
            }
            return pet
         } catch (error) {
            throw new TRPCError({
               code: "INTERNAL_SERVER_ERROR",
               message: `Failed to make request while trying to update pet with id: ${input.id}`,
               cause: error,
            })
         }
      }),

   delete: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
      try {
         const deletedPet = await Pets.deleteOne({ _id: id })
         if (!deletedPet || !deletedPet.acknowledged || deletedPet.deletedCount !== 1) {
            throw new TRPCError({
               code: "NOT_FOUND",
               message: `Could not find pet with id ${input.id} to delete`,
            })
         }
      } catch (error) {
         throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Failed to make request while trying to delete pet with id: ${input.id}`,
            cause: error,
         })
      }
   }),
})
