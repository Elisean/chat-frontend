'use client'


import { NextPage } from 'next'
import Image from 'next/image'
import { signOut } from 'next-auth/react'


import {useSession} from 'next-auth/react'
import Link from 'next/link'
const Chat: NextPage = ({}) => {

  
  const session = useSession()
  console.log(session)

  return(
    <div>
    Welcome to Next Chat
    
    <Link href='#' onClick={() => signOut({
      callbackUrl: "/"})}>
      <Image 
          src="/logout.svg"
          alt="logout"
          width={26}
          height={26}
      />
    </ Link>
    
  </div>
  ) 
}

export default Chat