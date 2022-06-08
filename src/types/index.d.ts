export type Dictionary<T, K = string> = {
  // eslint-disable-next-line no-unused-vars
  [key in K]: T
}
