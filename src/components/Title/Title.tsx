import React, { ReactNode } from 'react'
import "../../app/globals.css";

type TTitle = {
    children:ReactNode
}

export const Title:React.FC<TTitle> = ({children}) => {
  return (
    <h1 className="title">
      {children}
    </h1>
  )
}


