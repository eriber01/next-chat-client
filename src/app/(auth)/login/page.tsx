'use client'
import { useState } from 'react';
import style from '../auth.module.css'

import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from '../components/RegisterForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false)

  const toggle = () => {
    setIsLogin(!isLogin)
  }

  console.log(isLogin);

  return (
    <div className={`${style['container']} ${isLogin ? style.rotate : ''}`}>
      <div className={style.card}>
        <div className={`${style['login-form']}`}>
          <LoginForm toggle={toggle} />
        </div>
        <div className={style['register-form']}>
          <RegisterForm toggle={toggle} />
        </div>
      </div>
    </div>
  )
}