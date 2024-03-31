import { GithubOutlined, GoogleOutlined } from '@ant-design/icons'
import { Button, Form, Space, Typography } from 'antd'
import { signIn } from 'next-auth/react'
import React from 'react'
const SocialButtonAuth = () => {
  return (
    <div>
      <Form.Item style={{ margin: 0 }}>
        <Typography.Text disabled>
          Or Sign Up Using
        </Typography.Text>
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
        <Space style={{ margin: '5px' }}>
          <Button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            icon={<GoogleOutlined />}
            shape="circle"
          />
        </Space>
        <Space style={{ margin: '5px' }}>
          <Button
            onClick={() => signIn('github', { callbackUrl: '/' })}
            icon={<GithubOutlined />}
            shape="circle"
          />
        </Space>
      </Form.Item>
    </div>
  )
}

export default SocialButtonAuth