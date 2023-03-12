import React from 'react'
import { useAuthState , useSignOut } from 'react-firebase-hooks/auth'
import {auth} from "../firebase"
import ChatRoom from '../components/ChatRoom'
import Forms from '../components/Forms'
import { useNavigate } from 'react-router-dom'

export default function Home() {
   const navigate = useNavigate()
   const [user]= useAuthState(auth)
   const [signOut]=useSignOut(auth)

   console.log(user)

   function navigateToAccountHandler()
   {
    navigate('/account');
   }
  return (
    <div className='main'>
        <div className='header'>
            <p className="text-xl font-semibold">
                Its' Me {' '}
                <span className='text-lemon font-semibold'>
                    {user.displayName}!😁
                </span>
            </p>
            <div className='flex gap-x-3'>
                <button className='secondary-button' onClick={navigateToAccountHandler}>
                    Account
                </button>
                <button className='primary-button'
                onClick={()=> signOut()}>
                    Sign out
                </button>
            </div>
        </div>
        <ChatRoom/>
        <Forms/>
    </div>
  )
}
