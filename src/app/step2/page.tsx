'use client'
import ButtonLink from '@/component/button';
import '../step1/style.css'
import { useRouter } from 'next/navigation';
import BlockMail from './blockMail';
import { useFormContext } from 'react-hook-form';

export default function Page2() {
  const { getValues, formState: { defaultValues , isValid} } = useFormContext()
  const router = useRouter()

  console.log('defaultValues', defaultValues)

  const nextPage = () => {
    router.push('/step3')
  }
  const prevPage = () => {
    router.back()
  }
  console.log('valueFirs', getValues('firstname'))
  return (
    <div>
      <p>Value lastName: {getValues('firstname')}</p>
      {isValid ? 'True' : 'False'}
      <BlockMail />

      <ButtonLink text='Previous' onClick={prevPage}/>
      <ButtonLink text='Next' onClick={nextPage} />
    </div>
  );
}
