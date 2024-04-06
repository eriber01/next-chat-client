'use client'

import { Button, Form, Input, Typography, notification } from 'antd'
import style from '../auth.module.css'
import CustomRequired from './CustomRequired'
import SocialButtonAuth from './SocialButtonAuth'
import { LoginI, PropsForms } from '../interface'
import { Authentication } from '../utils'
import AuthNotifications from './AuthNotifications'
import { useRouter } from 'next/navigation'

export const LoginForm = ({ toggle }: PropsForms) => {
  const router = useRouter()

  // const url = new URLSearchParams(window.location.search)
  // console.log(url.get('error'));

  // if (url.get('error')) {
  //   console.log('entro');

  //   const error = url.get('error')
  //   AuthNotifications({ message: error!, status: 'error' })
  //   router.push('/login')
  // }

  const useLogin = async (values: LoginI) => {
    const auth = await Authentication(values, 'login')

    if (!auth?.ok) {
      AuthNotifications({ message: auth?.error!, status: 'error' })
      return
    }

    router.push('/')

  }

  return (
    <div className={style['form-container']}>
      <Form
        className={style.forms}
        name="login"
        autoComplete="on"
        layout="vertical"
        requiredMark={CustomRequired}
        onFinish={useLogin}
      >
        <Form.Item>
          <Typography.Title level={2}>
            Login
          </Typography.Title>
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          required
          rules={[
            { required: true, message: 'Please enter your Email!' },
            { type: 'email', message: 'Enter a valid Email' }
          ]}
        >
          <Input
            type="email"
            placeholder="test@email.com"
          />
        </Form.Item>
        <Form.Item
          label='Password'
          name='password'
          required
          style={{ marginBottom: 0 }}
          rules={[
            { required: true, message: 'Please enter the Password' },
            { min: 6, message: 'The password has length min 6' }
          ]}
        >
          <Input.Password
            placeholder="******"
          />
        </Form.Item>

        <Form.Item
          style={{ textAlign: 'right', width: '100%' }}
        >
          <Button
            style={{ padding: 0 }}
            type="link"
            onClick={() => toggle()}
          >
            Not have account? Register.
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="middle"
            htmlType='submit'
          >
            Login
          </Button>
        </Form.Item>
        <SocialButtonAuth />
      </Form>

    </div>
  )
}
