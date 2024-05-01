import React, { ReactNode } from "react"
import { Controller, useFormContext } from "react-hook-form"

type SelectCProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { dataSelect: Array<string | number>, name: string, id: string, desDefault?: string | number, isDisabled?: boolean }

type Option = {
  label: React.ReactNode
  value: string | number | string[]
}

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] }

export const SelectField = React.forwardRef<HTMLSelectElement, SelectCProps>(({ id, dataSelect, name, desDefault = "ご利用希望枠を選択", isDisabled }, ref) => {
  const { control, formState: { errors } } = useFormContext()
  const error = errors[name as string]?.message;
  const checkHasDes = typeof desDefault === 'string' ? desDefault.length > 0 : desDefault > 0
  return (
    <div className='m-select'>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <>
              <select id={id} onChange={onChange} ref={ref} value={value} className={error && 'error'} onBlur={onBlur} disabled={isDisabled}>
                {checkHasDes && <option value={''} className={value !== '' ? 'active' : ''} disabled>{desDefault}</option>}
                {dataSelect.map((item, index) => (
                  <option key={index} value={item}>{item}</option>
                ))}
              </select>
              
            </>
          )
        }}
      />
    </div>
  )
})

SelectField.displayName = "SelectField"