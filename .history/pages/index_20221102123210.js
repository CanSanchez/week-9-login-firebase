import React from 'react';
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { signInWithPopup, 
         GoogleAuthProvider, 
         createUserWithEmailAndPassword, 
         onAuthStateChanged, 
         signInWithEmailAndPassword,
         signOut } from 'firebase/auth';

export default function Home() {

  //async means it waits for something to act the function
  const GoogleSignIn = async () => {
    //new makes a new instance everytime this function is called
    const provider = new GoogleAuthProvider();
    const authorization = auth;
    const result = await signInWithPopup(authorization, provider);
    console.log(result)
  }

  const HandleSubmit = event => {
    console.log('submit')
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h3 className="text-3xl text-sky-400 font-bold underline absolute top-0 p-4">Welcome to the app</h3>
      <div className="grid grid-cols-3 gap-4">
        <form>
          <h2>Register</h2>
          <div>
            <div>
              <label>Email</label>
              <input
                placeholder='Email...'
                onChange={() => {}}
              />
               <label>Password</label>
              <input
                placeholder='Password...'
                onChange={() => {}}
              />
              <button onClick={() => GoogleSignIn()}>Log in with Google</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
