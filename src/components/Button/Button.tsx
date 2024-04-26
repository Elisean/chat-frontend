import React, { ReactNode } from 'react'

type TButton = {
    children:ReactNode;
    className?:string
    type?:"submit" | "reset" | "button" | undefined
    onClick?: any
}

export const Button:React.FC<TButton> = ({children, className, type, onClick}) => {
  return (
    <button type={type} className={className}>
        {children}
    </button>
  )
}


