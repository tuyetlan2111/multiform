import InputField from "@/component/InputField"
import { useFormContext } from "react-hook-form"

const Item = ({ index }: { index: number }) => {
  const { formState: { errors } , register} = useFormContext()
  return (
    <div className="item">
      <div>
        <input type="text"
        {...register(`dataArr${index}.firstName`)}
          placeholder="Your name.." />
      </div>
      <InputField name={`firstName${index}`} />
      <InputField name={`lastName${index}`} />
      <InputField name={`seiName${index}`} />
    </div>
  )
}

export default Item