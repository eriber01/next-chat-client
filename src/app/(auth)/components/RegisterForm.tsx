'use client'

import { Button, Form, Input, Typography } from 'antd'
import style from '../auth.module.css'
import CustomRequired from './CustomRequired'
import SocialButtonAuth from './SocialButtonAuth'
import { PropsForms } from '../interface'

export const RegisterForm = ({ toggle }: PropsForms) => {
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
          name='fullname'
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
          name='nick'
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

        <Form.Item>
          <Button
            type="primary"
            size="middle"
          >
            Register
          </Button>
        </Form.Item>
        <SocialButtonAuth />
      </Form>
    </div>
  )
}
