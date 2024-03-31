import { Avatar, Button, Popconfirm } from 'antd'
import { PoweroffOutlined } from "@ant-design/icons";
import { UserOutlined } from '@ant-design/icons';
import style from "./user.module.css";
import { signOut } from "next-auth/react";
import { UserI } from '../../interface';

const singOut = () => {
  signOut()
};

const User = ({ user }: { user: UserI }) => {
  console.log(user);
  console.log(user?.image);

  return (
    <div className={style['user-container']}>
      <div className={style['user-info']}>
        <div style={{paddingRight: '5px'}}>
          {
            user?.image ?
              <Avatar src={user?.image} /> :
              <Avatar icon={<UserOutlined />} />
          }
        </div>
        <label>
          {user?.name}
        </label>
      </div>
      <Popconfirm
        title='Logout'
        description='Be sure to Close Session'
        onConfirm={singOut}
        okText='Yes'
        cancelText='No'
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