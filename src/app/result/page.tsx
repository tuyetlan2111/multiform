"use client"
import BlockItem from "@/component/Block";
import InputField from "@/component/InputField";
import { Modal } from "@/component/modal";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form"

export default function Result() {
  const { getValues, setValue } = useFormContext()
  const showBlockItem = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  const handleClickModal = () => {
    setShow(prev => !prev)
  }
  console.log('showBlockItem', showBlockItem)
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <button onClick={handleClickModal}>Update</button>
        <p>First Name </p>
        <p>{getValues('firstname')}</p><br />
        <p>Last Name </p>
        <p>{getValues('lastname')}</p>
      </div>
       {
        show && <Modal ref={showBlockItem}>
          <BlockItem title="Block thu 1 step 1" nameBlock="inforName">
            <label htmlFor="fname">First Name</label>
            <InputField name='firstname' />
            <label htmlFor="lname">Last Name</label>
            <InputField name='lastname' />
          </BlockItem>
        </Modal>
      }

    </div>
  )
}