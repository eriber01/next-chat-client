import { notification } from "antd"

interface Props {
  message: string
  status: 'success' | 'info' | 'warning' | 'error'
}

const AuthNotifications = ({ message, status }: Props) => {
  notification[status]({ message })
}

export default AuthNotifications