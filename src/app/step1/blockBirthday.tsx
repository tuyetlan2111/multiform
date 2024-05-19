import InputField from "@/component/InputField"
import { SelectField } from "@/component/SelectField"
import { useFormContext } from "react-hook-form"

const BlockBirthday = ({ index }: { index: number }) => {
  const { setError, clearErrors, formState: { errors } } = useFormContext()

  const handleChangeBlur = (e: any, name: string) => {
    const value = e.target.value
    if (value == '') {
      setError(name, {
        message: 'co loi input roi'
      })
    } else {
      clearErrors(name)
    }
  }

  const year = ['2000', '2001', '2002', '2003']
  const errFamily = errors.familyCard as any
  return (
    <div>
      <SelectField id={`familyCard.${index}.dobYear`} dataSelect={year} name={`familyCard.${index}.dobYear`} handleChange={handleChangeBlur} />
      <span style={{ color: 'red' }}>{errFamily?.[index]?.dobYear?.message}</span>
      
      <SelectField id={`familyCard.${index}.dobMonth`} dataSelect={year} name={`familyCard.${index}.dobMonth`} handleChange={handleChangeBlur} />
      <SelectField id={`familyCard.${index}.dobDate`} dataSelect={year} name={`familyCard.${index}.dobDate`} handleChange={handleChangeBlur} />
    </div>
  )
}

export default BlockBirthday