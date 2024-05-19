'use client'
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Modal } from "./modal";

export default function BlockItem({ title, children, nameBlock }: { title: string, children: React.ReactNode, nameBlock?: string }) {

  const { formState: { errors } } = useFormContext()
  const errFamily = errors.familyCard as any
  useEffect(() => {
    if (errFamily[0]?.meifirstName?.message !== '') {
      
    }
  }, [])
  return (
    <>
      <div className="block-title" >
        <div className="title">
          {title}
        </div>
        {children}
      </div >
      {/* <button className="" type="button" onClick={() => setShow(prev => !prev)} style={{ cursor: 'pointer', background: '#cccc' }}>Open Modal</button>
      {
        show && <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#ccc', zIndex: '333' }}>
          {
            refE.current &&
            <Modal ref={refE}>
              <div dangerouslySetInnerHTML={{ __html: refE.current?.innerHTML }}>
              </div>
              <button onClick={() => setShow(false)} >Close</button>
            </Modal>
          }
        </div>
      } */}
    </>
  )
}