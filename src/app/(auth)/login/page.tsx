'use client'
import { useEffect, useState } from 'react';
import style from '../auth.module.css'

import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from '../components/RegisterForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Provider from '@/app/Providers';

export default function Login() {
  const [state, setState] = useState({ isLogin: false, isAuthenticate: false })
  const { data: session } = useSession()
  const router = useRouter()

  const toggle = () => {
    setState({ ...state, isLogin: !state.isLogin })
  }


  useEffect(() => {
    if (session?.user) {
      setState(prev => ({
        ...prev,
        isAuthenticate: true
      }))

      router.push('/')
    }
  }, [router, session])


  return (
    <Provider>
      <div className={`${style['container']} ${state.isLogin ? style.rotate : ''}`}>
        <div className={style.card}>
          <div className={`${style['login-form']}`}>
            <LoginForm toggle={toggle} />
          </div>
          <div className={style['register-form']}>
            <RegisterForm toggle={toggle} />
          </div>
        </div>
      </div>
    </Provider>
  )
}