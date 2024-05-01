import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function InputField({ name }: { name: string }) {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name as string]?.message
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <>
          <input type="text"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            style={error ? { border: '1px solid red' } : { border: '1px solid #000000' }}
            placeholder="Your name.." />
         
        </>

      )}
    />
  )
}