"use client"
import { FormProvider, useForm } from "react-hook-form";
import { Step1Schema } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";

export const defaultValues = {
  boxConfirm: false,
  familyCard: [
    {
      familyNumber: 0,
      firstName: "",
      meifirstName: "",
      cardEngFirstName: "",
      cardEngLastName: "",
      relationship: "",
      dobYear: "",
      dobMonth: "",
      dobDate: "",
      // gender: "",
      PINnumber: "",
      PINnumberConfirm: "",
    }
  ],
}

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let activeStep = 0
  const currentValidationSchema = Step1Schema[activeStep];
  const methods = useForm({
    defaultValues: defaultValues,
    mode: 'onChange',
    reValidateMode: 'onBlur',
    resolver: zodResolver(currentValidationSchema)
  })
  return (
    <FormProvider {...methods}>
      {children}
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  )
}