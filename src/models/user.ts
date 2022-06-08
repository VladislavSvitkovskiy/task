export interface UserInstance {
  id: number
  avatar_url: string
  html_url: string
  name: string
  email:string
}

export interface UsersListQueriesParamsInstance {
  per_page: number
}

export interface UserQueriesParamsInstance {
  userName: string
}
