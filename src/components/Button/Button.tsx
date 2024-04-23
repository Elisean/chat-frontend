import React, { ReactNode } from 'react'

type TButton = {
    children:ReactNode;
    className?:string
    type?:"submit" | "reset" | "button" | undefined
}

export const Button:React.FC<TButton> = ({children,className, type}) => {
  return (
    <button type={type} className={className}>
        {children}
    </button>
  )
}


