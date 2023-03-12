import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import{auth,db} from "../firebase"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"

export default function Form() {
  const [message, setMessage] = useState('');
  const[user]=useAuthState(auth)
  


  const sendMessageHandler = async e => {
    e.preventDefault();
    const {uid, photoURL}=user
    await addDoc(collection(db,'messages'),
    {
        text:message,
        createdAt: serverTimestamp(),
        uid:uid,
        photoURL: photoURL
    })
    setMessage('')
  };

  return (
    <form className='input-form' onSubmit={sendMessageHandler}>
      <input
        autoFocus
        placeholder='say something nice'
        className='input'
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button
        type='submit'
        className='submit-button'
        disabled={message.trim().length === 0}
      >
        Send
      </button>
    </form>
  );
}