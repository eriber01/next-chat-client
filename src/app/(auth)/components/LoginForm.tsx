'use client'

import { Button, Form, Input, Typography } from 'antd'
import style from '../auth.module.css'
import CustomRequired from './CustomRequired'
import SocialButtonAuth from './SocialButtonAuth'

export const LoginForm = () => {
  return (
    <div className={style['form-container']}>
      <Form
        className={style.forms}
        name="login"
        autoComplete="on"
        layout="vertical"
        requiredMark={CustomRequired}
        onValuesChange={(value) => console.log(value)}
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
            onClick={() => alert('hola')}
          >
            Not have account? Register.
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            size="middle"
          >
            Login
          </Button>
        </Form.Item>

        <SocialButtonAuth />
      </Form>
    </div>
  )
}
