import { register } from "module";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function InputField({ name, placeholder, handleChange }:
  {
    name: string,
    placeholder: string,
    handleChange?: (e: any, name: string) => void
  }) {
  const { control, formState: { errors }, trigger } = useFormContext();
  const error = errors[name as string]?.message

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <>
            <input type="text"
              onChange={(value) => {
                onChange(value)
                handleChange && handleChange(value, name);
              }}
              onBlur={(value) => {
                onBlur
                handleChange && handleChange(value, name);
              }}
              value={value}
              id={name}
              required={true}
              style={error ? { border: '1px solid red' } : { border: '1px solid #000000' }}
              placeholder={placeholder} />
            <p>{errors[name as string]?.message as ReactNode}</p>
          </>
        )}
      />
    </>
  )
}