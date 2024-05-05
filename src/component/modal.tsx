import React, { Ref } from "react";
import { ReactNode } from "react"

export const Modal = ({ children , closeModal}: { children: ReactNode , closeModal: () => void}) => {
  return (
    <div>
      <button className="close-modal" onClick={closeModal}>Close Modal</button>
      {children}
    </div>
  )
}