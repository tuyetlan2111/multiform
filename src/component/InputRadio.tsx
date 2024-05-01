import React, { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form"

const InputRadio = ({ radioId, radioName, radioText, description }: { radioId: string, radioName: string, radioText: string, description?: string }) => {
  const { register, formState: { errors } } = useFormContext();
  const watch = useWatch()
  const [showText, setShowText] = useState(false)
  const selectedOption = watch[radioName];
  useEffect(() => {
    if (selectedOption === radioText && description) {
      setShowText(true)
    }
    else {
      setShowText(false)
    }
  }, [selectedOption])

  return (
    <div className="item">
      <input
        {...register(radioName)}
        type="radio"
        id={radioId}
        value={radioText}
      />

      <label htmlFor={radioId}>
        {radioText}
      </label>
      {errors[radioName]?.message && <p>{errors[radioName]?.message as React.ReactNode}</p>}

      {showText && <p>{description}</p>}

    </div>

  )
}
export default InputRadio