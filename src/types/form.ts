import { z } from "zod";

const numFields = 5

export const Step1Schema = [

  // z.object({
  //   firstname: z.string().min(1, { message: 'Chua it nhat 1 text' }),
  //   lastname: z.string().min(1, { message: 'Chua it nhat 1 text' }),
  //   country: z.string().min(1, { message: 'Chua it nhat 1 text' }),
  //   subject: z.string().min(1, { message: 'Chua it nhat 1 text' }),

  // }),
  // z.object({
  //   email: z.string().email(),
  //   age: z.string().min(1, { message: 'Nhap tuoi' })
  // }),
  z.object(
    Object.fromEntries(
      Array.from({ length: numFields }, (_, i) => [
        `firstNames${i}`, z.string().min(1, { message: `firstName${i} cannot be empty` }),
        `lastNames${i}`, z.string().min(1, { message: `lastNames${i} cannot be empty` })
      ]).flat()
    )

  )
]
