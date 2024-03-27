'use client'
import { useState } from 'react';
import style from '../auth.module.css'

import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from '../components/RegisterForm';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className={style['container']}>
      <LoginForm />
      <RegisterForm />
    </div>
  )
}