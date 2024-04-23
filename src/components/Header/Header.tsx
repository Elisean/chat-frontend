import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import "../../app/globals.css";

const Header = () => {
  return (
    <header className={styles.header}>

        <div className='container'>
          <div className={styles.headerInner}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/sign-in'>Sign-in</Link>
          </div>
        </div>
     
    </header>
  )
}

export default Header
