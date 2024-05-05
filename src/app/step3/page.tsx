'use client'
import ButtonLink from '@/component/button';
import '../step1/style.css'
import { useRouter } from 'next/navigation';
import { useFieldArray, useFormContext } from 'react-hook-form';
import Item from './item';
import React, { useEffect } from 'react';

export default function Page3() {
  const { getValues, formState: { defaultValues, errors, isValid}, register, trigger,  } = useFormContext()
  const router = useRouter()


  console.log('defaultValues', defaultValues)

  // const { fields } = useFieldArray({
  //   name: 'firstNames0',
  //   control
  // })

  const nextPage = () => {
    trigger('firstNames0')
    if(isValid) {
      router.push('/result')
    }
    else {
      console.log('erros', errors)
    }
  }
  const prevPage = () => {
    router.back()
  }
  // console.log('valueFirs', fields)

  // useEffect(() => {
  //   register("firstName0", { required: true });
  //   register("lastName0", { required: true });
  // }, [register]);

  return (
    <form>
      <div>
        <input type="text"
          {...register("firstNames0")}
          placeholder="Your name.." />
        <p>{errors[`firstNames0`]?.message as React.ReactNode}</p>
      </div>
      <div>
        <input type="text"
          {...register(`lastNames0`)}
          placeholder="Your name.." />
        <p>{errors[`lastNames${0}`]?.message as React.ReactNode}</p>
      </div>
      <div>
        <input type="text"
          {...register(`seiNames0`)}
          placeholder="Your name.." />
        <p>{errors[`seiNames${0}`]?.message as React.ReactNode}</p>
      </div>



      <ButtonLink text='Previous' onClick={prevPage} />
      <ButtonLink text='Next' onClick={nextPage} />
    </form>
  );
}
