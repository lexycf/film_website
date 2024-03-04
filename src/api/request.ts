import { service } from "./axios"


/**
 * get 请求
 * @param url 
 * @param params 
 * @returns 
 */
export const get = (url: string, params?: object) => {
  return service.get(url, { params })
}

/**
 * post 请求
 * @param url 
 * @param data 
 * @returns 
 */
export const post = (url: string, data?: object) => {
  return service.post(url, data)
}