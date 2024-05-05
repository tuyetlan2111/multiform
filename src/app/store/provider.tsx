"use client"
import { FormProvider, useForm } from "react-hook-form";
import { Step1Schema } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";

export const defaultValues = {
  firstname: '',
  lastname: '',
  country: '',
  subject: '',
  income: '',
  // firstNames0: '',
  // lastNames0: '',
  // seiNames0: '',
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
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: zodResolver(currentValidationSchema)
  })
  return (
    <FormProvider {...methods}>
      {children}
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  )
}