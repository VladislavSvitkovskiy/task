export interface UserInstance {
  id: number
  avatar_url: string
  login: string
  name: string
  email: string
}

export interface UsersParamsInstance {
  url: string
  params: UsersQueriesParamsInstance
  callback?: (r: {data: UserInstance[]}) => void
}

export interface UsersQueriesParamsInstance {
  per_page: number
}

export interface UserParamsInstance {
  url: string
  callback?: (r: {data: UserInstance}) => void
}
