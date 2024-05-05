"use client"
import './style.css'
import ButtonLink from '@/component/button';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import BlockName from './component1';
import BlockCountry from './component2';
import BlockWeather from './component3';


export default function Page1() {
  const { trigger, formState: { isValid, errors }, watch, getFieldState } = useFormContext()
  const router = useRouter()
  const check = watch('check')
  console.log(watch('check'))
  const nextPage = () => {
    if (check) {
      trigger(["firstname", "lastname", "country", "subject", "income"]);
    } 
    else {
      trigger(["firstname", "lastname", "country", "subject"])
    }
    if (isValid) {
      router.push('/step2')
    }
    else {
      console.log('kkkkkkkkk')
    }
  }

  useEffect(() => {

  }, [])

  return (
    <>
    <div>
      {isValid ? 'True' : 'False'}
      <BlockName />

      <BlockCountry />
      <BlockWeather />
      <ButtonLink text='Next' onClick={nextPage} />
    </div>
    </>
  );
}

