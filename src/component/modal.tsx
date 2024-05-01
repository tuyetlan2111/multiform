import React, { Ref } from "react";
import { ReactNode } from "react"

export const Modal = ({ children, ref }: { children: ReactNode, ref: Ref<HTMLDivElement> }) => {
  return (
    <div ref={ref}>
      {children}
    </div>
  )
}