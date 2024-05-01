'use client'
import BlockItem from '@/component/Block';
import ButtonLink from '@/component/button';
import '../step1/style.css'
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Page2() {

  const router = useRouter()
  
  const nextPage = () => {
   

      router.push('/result')
    
  }
  return (
    <form action="/action_page.php">
      <BlockItem title="Block thu 1 step 2" nameBlock='mail'>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Email.." />

        <label htmlFor="age">Age</label>
        <input type="text" id="age" name="age" placeholder="Your age.." />
      </BlockItem>

      <BlockItem title="Block thu 2 step 2" nameBlock='des'>
        <label htmlFor="subject">Description</label>
        <textarea id="description" name="description" placeholder="Write Description.." ></textarea>
      </BlockItem>
      {/* <ButtonLink text='Previous' onClick={}/> */}
      <ButtonLink text='Next' onClick={nextPage}/>
    </form>
  );
}
