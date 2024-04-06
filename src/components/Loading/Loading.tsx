import { Spin } from "antd"
import style from './loading.module.css'

export const Loading = () => {
  return (
    <div className={style.container}>
      <Spin tip='loading' size='large' />
    </div>
  )
}
