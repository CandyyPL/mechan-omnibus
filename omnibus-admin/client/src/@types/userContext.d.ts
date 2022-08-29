export interface UserType {
  id: string
  name: string
  email: string
  class: string
  profile: string
  date: number
}

export interface UsersContextType {
  users: User[]
  reloadUsers: Function
  error: string
  loading: boolean
}
