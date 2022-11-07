import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { async } from '@firebase/util';

export default function Home() {

  //async means it waits for something to act the function
  const GoogleSignIn = async () => {
    //new makes a new instance everytime this function is called
    const provider = new GoogleAuthProvider();
    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
  }

  return (
    <div>

    </div>
  )
}
