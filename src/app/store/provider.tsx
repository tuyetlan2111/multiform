"use client"
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { FormProvider, useForm } from "react-hook-form";
import { Step1Schema } from "@/types/form";
import { zodResolver } from "@hookform/resolvers/zod";

persistStore(store);

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let activeStep = 0
  const currentValidationSchema = Step1Schema[activeStep];
  const methods = useForm({
    defaultValues:  {
      firstname: '',
      lastname: '',
      country: '',
      subject: '',
      income: '',
      check: false
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(currentValidationSchema)
  })
  return <Provider store={store}>
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  </Provider>;
}