"use client"
import BlockItem from '@/component/Block';
import './style.css'
import ButtonLink from '@/component/button';
import InputField from '@/component/InputField';
import { SelectField } from '@/component/SelectField';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import InputRadio from '@/component/InputRadio';
import { useEffect, useState } from 'react';

export default function Page1() {
  const { trigger, formState: { isValid, errors }, watch, register } = useFormContext()
  // const [show, setShow] = useState(false)
  const { onChange, onBlur } = register('check');
  const router = useRouter()
  const check = watch('check')

  console.log(watch('check'))
  const nextPage = () => {
    if (check) {
      void trigger(["firstname", "lastname", "country", "subject", "income"]);
    } else {
      trigger(["firstname", "lastname", "country", "subject"])
    }
    if (isValid) {
      router.push('/step2')
    }
  }

  console.log('errors', errors)

  return (
    <form action="/action_page.php" >
      {isValid ? 'True' : 'False'}
      <BlockItem title="Block thu 1 step 1" nameBlock="inforName">
        <label htmlFor="firstname">First Name</label>
        <InputField name='firstname' />
        <label htmlFor="lastname">Last Name</label>
        <InputField name='lastname' />
        <div>
          <input type="checkbox" id="check" {...register('check')} onChange={onChange} onBlur={onBlur} />
          <label htmlFor="check">Show Block Income</label>
        </div>
      </BlockItem>
      {
        check && <BlockItem title="Block Income" >
          <InputRadio radioId={'more-than-one-year '} radioName={'income'} radioText={'More than one year '} />
          <InputRadio radioId={'more-than-two-year '} radioName={'income'} radioText={'More than two year '} />
          <InputRadio radioId={'more-than-three-year '} radioName={'income'} radioText={'More than three year '} />
          <InputRadio radioId={'more-than-fourth-year '} radioName={'income'} radioText={'More than fourth year '} />
        </BlockItem>
      }


      <BlockItem title="Block thu 2 step 1" nameBlock="country">
        <label htmlFor="country">Country</label>
        <SelectField name={'country'} id={'country'} dataSelect={["Australia", "Canada", "USA"]} />

        <label htmlFor="subject">Subject</label>
        <InputField name="subject" />
      </BlockItem>
      <BlockItem title='Text Radio'>
        <InputRadio radioId={'field-wind'} radioName={'weather'} radioText={'Wind'} />
        <InputRadio radioId={'field-sun'} radioName={'weather'} radioText={'Sun'}
          description='Get one personalized feed for all the knowledge you need as a developer.' />
        <InputRadio radioId={'field-rain'} radioName={'weather'} radioText={'Rain'} />
      </BlockItem>
      <ButtonLink text='Next' onClick={nextPage} />
    </form>
  );
}
