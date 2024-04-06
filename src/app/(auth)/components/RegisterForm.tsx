'use client'

import { Button, Form, Input, Typography } from 'antd'
import style from '../auth.module.css'
import CustomRequired from './CustomRequired'
import SocialButtonAuth from './SocialButtonAuth'
import { PropsForms, RegisterI } from '../interface'
import { useRouter } from 'next/navigation'
import { Authentication } from '../utils'
import AuthNotifications from './AuthNotifications'

export const RegisterForm = ({ toggle }: PropsForms) => {
  const router = useRouter()
  const useRegister = async (values: RegisterI) => {
    const auth = await Authentication(values, 'register')

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
        onFinish={useRegister}
      >
        <Form.Item>
          <Typography.Title level={2}>
            Register
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
          label='Full name'
          name='name'
          required
          rules={[
            { required: true, message: 'Please enter your Full Name!' },
          ]}
        >
          <Input
            type="text"
            placeholder="Pedro J. Tejeda"
          />
        </Form.Item>
        <Form.Item
          label='Nick'
          name='nickName'
          required={false}
        >
          <Input
            type="text"
            placeholder="p.tejeda"
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
            type='password'
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
            You have account? Login.
          </Button>
        </Form.Item>

        <Form.Item
          style={{ margin: 0 }}
        >
          <Button
            type="primary"
            size="middle"
            htmlType='submit'
          >
            Register
          </Button>
        </Form.Item>
        <SocialButtonAuth />
      </Form>
    </div>
  )
}
