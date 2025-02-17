import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from "../firebase";

const Login = () => {

  const loginInWithGoole = () => {
    //Googleでログイン機能実装
    signInWithPopup(auth, provider).then((result) => {

    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoole}>Gooleでログイン</button>
    </div>
  )
}

export default Login
