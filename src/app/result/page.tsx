"use client"
import { Modal } from "@/component/modal";
import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form"
import BlockName from "../step1/component1";

export default function Result() {
  const { getValues, setValue } = useFormContext()
  const [show, setShow] = useState(false)

  const handleShowModal = () => {
    setShow(true)
  }

  const closeModal = () => {
    setShow(false)
  }

  const updateFieldModal = (name: string, value: string | number) => {
    setValue(name, value)
  }


  return (
    <div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '16px' }}>First Name </p>
          <p>{(getValues('firstname'))}</p><br />
        </div>
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '16px' }}>Last Name </p>
          <p>{(getValues('lastname'))}</p><br />
        </div>



        <button onClick={handleShowModal}>Update</button>
      </div>
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '16px' }}>Country </p>
          <p>{(getValues('country'))}</p><br />
        </div>
        <div style={{ display: 'flex' }}>
          <p style={{ marginRight: '16px' }}>Subject </p>
          <p>{(getValues('subject'))}</p><br />

        </div>

      </div>
      {
        show && <Modal closeModal={closeModal}>
          <BlockName />
          <button onClick={() => updateFieldModal('firstname', 'Tran')}>Update Modal</button>
        </Modal>
      }

    </div>
  )
}