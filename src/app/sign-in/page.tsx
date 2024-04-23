import { NextPage } from 'next'
import Image from 'next/image'
import  styles  from './sign-in.module.css'
import { Title } from '@/components/Title/Title'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import Link from 'next/link'


const signIn: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <Title>Sign In Chat</Title>
      <form action="#" className={styles.form}>
        <Input type='text' name='username' placeholder='Username' className={styles.userName}/>
        <Input type='password' name='userpassword' placeholder='Password' className={styles.userPassword}/>
        <span className={styles.formButtonBg}></span>
        <Button className={styles.formButton}>
          <Image 
            src="/sign-button.svg"
            alt="sign-button"
            width={26}
            height={26}
            />
        </Button>
      </form>
        <div className={styles.outherLink}>
              <p className={styles.question}>You have an account?</p>
              <Link href='/' className={styles.link}>Click here</Link>
        </div>
  </main>
  )

}

export default signIn