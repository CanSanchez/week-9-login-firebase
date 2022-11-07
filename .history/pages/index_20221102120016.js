import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { async } from '@firebase/util';

export default function Home() {

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  }

  return (
    <div>

    </div>
  )
}
