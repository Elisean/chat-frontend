'use client'
import { NextPage } from 'next'
import styles from './page.module.css'
import { Title } from '@/components/Title/Title'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'

import {useSession} from 'next-auth/react'

const SingUp: NextPage = () => {

  const session = useSession()
  console.log(session)
  return (
    <main>
      <div className={styles.wrapper}>
       <Title>Welcome To Chat</Title>

      <div className={styles.inner}>
        <Button className={styles.button}><Link href='/Sign-up-page'>sign up</Link></Button>
        <Button className={styles.button}><Link href='/Sign-in-page'>sign in</Link></Button>
      </div>
   
      </div>

    </main>
  )
}

export default SingUp