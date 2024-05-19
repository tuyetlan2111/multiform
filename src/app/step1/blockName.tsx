import BlockItem from "@/component/Block"
import InputField from "@/component/InputField"
import { register } from "module"
import React, { useEffect } from "react"
import { Controller, useFormContext } from "react-hook-form"

const BlockName = ({ index }: { index: number }) => {
  const { setError, clearErrors, register, watch, formState: { errors } } = useFormContext()

  const handleChangeBlurInput = (e: any, name: string) => {
    const value = e.target.value
    if (value == '') {
      setError(name, {
        message: `${name} co loi roi`
      })
    } else {
      clearErrors(name)
    }
  }
  const errFamily = errors.familyCard as any
  return (
    <BlockItem title="Name">
      <input type="number" value={index as number} {...register(`familyCard.${index}.familyNumber`)} /><br/>
      <InputField name={`familyCard.${index}.firstName`} placeholder={"First Name"} handleChange={handleChangeBlurInput} />
      <span style={{ color: 'red' }}>{errFamily?.[index]?.firstName?.message}</span>
      <InputField name={`familyCard.${index}.meifirstName`} placeholder={"meifirs Name"} handleChange={handleChangeBlurInput} />
      <span style={{ color: 'red' }}>{errFamily?.[index]?.meifirstName?.message}</span>
    </BlockItem>
  )
}

export default BlockName