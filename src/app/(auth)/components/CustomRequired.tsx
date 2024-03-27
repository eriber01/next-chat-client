

import { Tag } from 'antd'
import React from 'react'

const CustomRequired = (label: React.ReactNode, { required }: { required: boolean }) => {
  return (
    <>
      {required ? <Tag color="red">required</Tag> : <Tag color='warning'>optional</Tag>}
      {label}
    </>
  )
}

export default CustomRequired