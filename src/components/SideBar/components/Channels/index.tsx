'use client'

import { Avatar, List, Typography } from "antd";
import style from "./channel.module.css";
import { useSession } from "next-auth/react";

const data = [
  {
    title: 'Ant Design Title 1',
    message: 'Hola como estas asdashdgjasd askdjasd asdkjahsdk masdkjas dk askd aksjd a',
  },
  {
    title: 'Ant Design Title 2',
    message: 'Hola como estas asdashdgjasd askdjasd asdkjahsdk masdkjas dk askd aksjd a',
  },
  {
    title: 'Ant Design Title 3',
    message: 'Hola como estas asdashdgjasd askdjasd asdkjahsdk masdkjas dk askd aksjd a',
  },
  {
    title: 'Ant Design Title 4',
    message: 'Hola como estas asdashdgjasd askdjasd asdkjahsdk masdkjas dk askd aksjd a',
  },
];

const Channels = () => {

  return (
    <div>
      <List
        dataSource={data}
        className={style['channel-container']}
        // loading
        renderItem={(item, index) => (
          <List.Item className={style['channel-list']}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{ paddingLeft: '3px' }}
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<span>{item.title}</span>}
              description={
                <Typography.Text
                  ellipsis={{ suffix: '' }}
                >
                  {item.message}
                </Typography.Text>
              }
            // description={<span>{item.message}</span>}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Channels