import { custom, z } from "zod";

// const validateFamily = z.object({
//   firstName: z.string().min(2, { message: "Vui long nhap" }),
//   meifirstName: z.string().min(2, { message: "Vui long nhap" }),
//   cardEngFirstName: z.string().min(2, { message: "Vui long nhap" }),
//   cardEngLastName: z.string().min(2, { message: "Vui long nhap" }),
//   relationship: z.string().min(2, { message: "Vui long nhap" }),
//   dobYear: z.string().min(2, { message: "Vui long nhap" }),
//   dobMonth: z.string().min(2, { message: "Vui long nhap" }),
//   dobDate: z.string().min(2, { message: "Vui long nhap" }),
//   PINnumber: z.string().min(2, { message: "Vui long nhap" }),
//   PINnumberConfirm: z.string().min(2, { message: "Vui long nhap" }),
// })

// export const typeDiscriminatorSchema = z.discriminatedUnion("familyNumber", [
//   z.object({
//     familyNumber: z.literal(0),
//   }),
//   z.object({
//     familyNumber: z.literal(1),
//   }),
//   z.object({
//     familyNumber: z.literal(2),
//   }),
// ]);

export const Step1Schema = [

  z.object({
    boxConfirm: z.boolean(),
    familyCard: z.object({
      firstName: z.string().min(2, { message: "Vui long nhap" }),
      meifirstName: z.string().min(2, { message: "Vui long nhap" }),
      cardEngFirstName: z.string().min(2, { message: "Vui long nhap" }),
      cardEngLastName: z.string().min(2, { message: "Vui long nhap" }),
      relationship: z.string().min(2, { message: "Vui long nhap" }),
      dobYear: z.string().min(2, { message: "Vui long chọn" }),
      dobMonth: z.string().min(2, { message: "Vui long chọn" }),
      dobDate: z.string().min(2, { message: "Vui long chọn" }),
      PINnumber: z.string().min(2, { message: "Vui long nhap" }),
      PINnumberConfirm: z.string().min(2, { message: "Vui long nhap" }),
    }).array()
  })
]

