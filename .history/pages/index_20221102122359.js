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

  return (
    <html>
      <body>
        <div>
          <h3>Welcome to the app</h3>
          <div>
            <form>
              <h2>Register</h2>
              <div>
                <div>
                  <label>Email</label>
                  <button onClick={() => GoogleSignIn()}>Log in with Google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  )
}
