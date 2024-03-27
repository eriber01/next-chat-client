import { Avatar, Button, Popconfirm, message } from 'antd'
import { PoweroffOutlined } from "@ant-design/icons";
import style from "./user.module.css";

const confirm = () => {
  message.success('Click on Yes');
};

const cancel = () => {
  message.error('Click on No');
};

const User = () => {
  return (
    <div className={style['user-container']}>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <label>
        Eriber Tejeda
      </label>
      <Popconfirm
        title='Logout'
        description='Be sure to Close Session'
        onCancel={cancel}
        onConfirm={confirm}
        okText='Yes'
        cancelText='Not'
      >
        <Button
          type='primary'
          icon={<PoweroffOutlined />}
        />
      </Popconfirm>
    </div>
  )
}

export default User