import InputField from "@/component/InputField"
import { useFormContext } from "react-hook-form"

const BlockCard = ({ index }: { index: number }) => {
  const { setError, clearErrors } = useFormContext()
  const handleChangeBlurInput = (e: any, name: string) => {
    const value = e.target.value
    if (value == '') {
      setError(name, {
        message: 'co loi input roi'
      })
    } else {
      clearErrors(name)
    }
  }

  return (
    <div>
      <InputField name={`familyCard.${index}.cardEngFirstName`} placeholder={'cardEngFirstName'} handleChange={handleChangeBlurInput}/>
      <InputField name={`familyCard.${index}.cardEngLastName`} placeholder={'cardEngLastName'} handleChange={handleChangeBlurInput}/>
    </div>
  )
}

export default BlockCard