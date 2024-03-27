'use client'
import { useState } from 'react';
import style from '../auth.module.css'

import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from '../components/RegisterForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className={style['container']}>
      <div className={`${style.card} ${isLogin ? '' : style['show-back']}`}>
        <div className={style.login}>
          <LoginForm />
        </div>
        <div className={style.register}>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}