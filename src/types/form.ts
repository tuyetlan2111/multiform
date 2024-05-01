import { z } from "zod"; // Add new import

export const Step1Schema = [
  z.object({
    firstname: z.string().min(1, { message: 'Chua it nhat 1 text' }),
    lastname: z.string().min(1, { message: 'Chua it nhat 1 text' }),
    country: z.string().min(1, { message: 'Chua it nhat 1 text' }),
    subject: z.string().min(1, { message: 'Chua it nhat 1 text' }),
    check: z.boolean(),
    
  }).superRefine((data, ctx) => {
    if (data.check === true) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Chua it nhat 1 text",
        path: ['income'],
      })
    }
  }),
  z.object({
    email: z.string().email(),
    age: z.string().min(1, { message: 'Nhap tuoi' })
  })
]