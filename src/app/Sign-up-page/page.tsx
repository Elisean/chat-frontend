import { NextPage } from 'next'
import styles from './sign-up.module.css'
import { Title } from '@/components/Title/Title'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'


const SingUp: NextPage = () => {
  return (
    <main className={styles.wrapper}>
        <Title>Sign Up Chat</Title>
        <form action="#" className={styles.form}>
            <Input type='text' name='username' placeholder='Username' className={styles.userName}/>
            <Input type='password' name='userpassword' placeholder='Password' className={styles.userPassword}/>
            <Input type='mail' name='userEmail' placeholder='Mail' className={styles.userMail}/>
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
        <div className={styles.inner}>
            <div className={styles.outherLink}>
                <p className={styles.question}>Forgot your password?</p>
                <Link href='/Sign-in' className={styles.link}>Click here</Link>
            </div>
        </div>
    </main>
  )
}

export default SingUp