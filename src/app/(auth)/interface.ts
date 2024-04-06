export interface PropsForms {
  toggle: () => void
}

export interface LoginI {
  email: string
  password: string
  type: string
}

export interface RegisterI {
  email: string
  name: string
  password: string
  nickName?: string
  type: string
}