import InputField from "@/component/InputField"
import { useFormContext } from "react-hook-form"

const BlockPIN = ({ index }: { index: number }) => {
  const { setError, clearErrors, watch, formState: { errors } } = useFormContext()

  const handleChangeBlur = (e: any, name: string) => {
    console.log('watch', watch(`familyCard.${index}.PINnumber`))
    const value = e.target.value
    if (value == '') {
      setError(name, {
        message: 'co loi input roi'
      })
    } else if (watch(`familyCard.${index}.PINnumber`) !== watch(`familyCard.${index}.PINnumberConfirm`)) {
      setError(`familyCard.${index}.PINnumberConfirm`, {
        message: 'co loi PINnumberConfirm roi'
      })
    } else {
      clearErrors(name)
    }
  }
  const errFamily = errors.familyCard as any
  return (
    <div>
      <InputField name={`familyCard.${index}.PINnumber`} placeholder={"PIN"} handleChange={handleChangeBlur} />
      <span style={{ color: 'red' }}>{errFamily?.[index]?.PINnumber?.message}</span>
      <InputField name={`familyCard.${index}.PINnumberConfirm`} placeholder={"PIN Confirm"} handleChange={handleChangeBlur} />
      <span style={{ color: 'red' }}>{errFamily?.[index]?.PINnumberConfirm?.message}</span>

    </div>
  )
}

export default BlockPIN