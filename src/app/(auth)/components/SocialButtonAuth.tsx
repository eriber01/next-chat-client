import { GithubOutlined, GoogleOutlined } from '@ant-design/icons'
import { Button, Form, Space, Typography } from 'antd'
import React from 'react'
import style from '../auth.module.css'
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
          <Button icon={<GoogleOutlined />} shape="circle" />
        </Space>
        <Space style={{ margin: '5px' }}>
          <Button icon={<GithubOutlined />} shape="circle" />
        </Space>
      </Form.Item>
    </div>
  )
}

export default SocialButtonAuth