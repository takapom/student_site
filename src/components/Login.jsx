import React from 'react'
import { signInWithPopup } from 'firebase/auth';
import {auth, provider} from "../firebase";
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoole = () => {
    //Googleでログイン機能実装
    //{}で囲むのはjavascriptのコードを記述するため
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
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
