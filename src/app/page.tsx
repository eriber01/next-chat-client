'use client'
import { useParams, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001')


interface Chats {
  id: number,
  message: string,
  userId: number,
  channelId: number,
  createdAt: Date,
  updatedAt: Date
}
interface Props {
  message: string
  messages: Chats[]
}

export default function Home() {
  const params = useSearchParams()
  const [state, setState] = useState<Props>({ message: '', messages: [] })
  const userId = Number(params.get('id'))

  useEffect(() => {
    // socket.on('connect', ( ) => { })
    socket.on('send-message', (msg) => {
      console.log(msg);

      setState(prev => ({
        ...prev,
        messages: msg
      }))
    })

    socket.emit('get-all-channels', ({ userId }))

    socket.on('get-all-channels', (msg) => {
      console.log({ msg });
    })


    console.log('pase');


    return () => {
      socket.off('send-message')
      socket.off('get-all-channels')
    }
  }, [userId])

  const sendMessage = () => {
    console.log('entro');

    const payload = {
      message: state.message,
      userId: 2,
      channelId: 7
    }

    socket.emit('send-message', payload)
    setState({ ...state, message: '' })
  }
  console.log(state.messages);

  !userId && alert('No tiene usuario')

  return (
    <main className={styles.main}>
      <input type="text"
        placeholder="enter the message"
        value={state.message}
        onChange={({ target: { value } }) => setState({ ...state, message: value })}
      />
      <button
        onClick={() => sendMessage()}
      >sendMessage</button>
      <div>
        {
          state.messages.map((item, index) => (
            <p key={index}>{item.message}</p>
          ))
        }
      </div>
    </main>
  );
}
