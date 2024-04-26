'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import  styles  from './sign-in.module.css'
import { Title } from '@/components/Title/Title'
import { Input } from '@/components/Input/Input'
import { Button } from '@/components/Button/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import type { FormEventHandler } from 'react'


const signInPage: NextPage = () => {

const router = useRouter();

  const handleSubmit:FormEventHandler<HTMLFormElement> = async (event) =>{
    event?.preventDefault()
     
    const formData = new FormData(event.currentTarget);
  
   const res = await signIn('credentials', {
      nickName: formData.get('nickName'),
      password: formData.get('password'),

      redirect: false,
    });
   

    if(res && !res.error){
      router.push('/Chat')
      
    }else{
    console.log('1')
    }

  }


  return (
    <main className={styles.wrapper}>
      <Title>Sign In Chat</Title>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <Input type='text' name='nickName' placeholder='Username' className={styles.userName}/>
        <Input type='password' name='password' placeholder='password' className={styles.userPassword}/>
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
              <p className={styles.question}>You have an account?</p>
              <Link href='/Sign-up-page' className={styles.link}>Click here</Link>
        </div>
        <div className={styles.signSocialNetwork}>
 
        <Image 
            src="/vk.svg"
            alt="vkontakte"
            width={26}
            height={26}
            className={styles.socialIcon}
        />
        <Link href='https://accounts.google.com/o/oauth2/v2/auth?client_id=916760604763-u2meiplb3ulcapo6fj1155n6imd09lqp.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=gCDXIS-ZWBOgqI67_iwtlzCypRo9Qc0q0uHjOsalY-0&code_challenge=L_voWbF8b-F02scpZ8CCImvdo8tRKaJ1mC2rge1Ml2k&code_challenge_method=S256' >
        <Image 
            src="/google.svg"
            alt="google"
            width={26}
            height={26}
            className={styles.socialIcon}
            />
        </Link>
       
        <Link href='https://github.com/login?client_id=407d8d89e8eec2a57dc8&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D407d8d89e8eec2a57dc8%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fapi%252Fauth%252Fcallback%252Fgithub%26response_type%3Dcode%26scope%3Dread%253Auser%2Buser%253Aemail%26state%3DulnFfXl4JDm7XLsby8F6jMVfCEP5zE0ucCYwM9ucTcw'>
        <Image 
            src="/gh.svg"
            alt="github"
            width={26}
            height={26}
            className={styles.socialIcon}
          />
        </Link> 
        </div>
      </div>
       
  </main>
  )

}

export default signInPage
