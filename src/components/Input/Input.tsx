import React from 'react'
import styles from './Input.module.css'

interface IINput{
    type:string;
    placeholder:string;
    name:string;
    value?: string | number;
    className?:string
}

export const Input:React.FC<IINput> = ({type, placeholder, name, value, className}) => {
  return (
   <input 
    type={type}
    placeholder={placeholder} 
    name={name}
    value={value}
    className={className}
    autoComplete='off'
    />

  )
}


