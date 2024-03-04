import axios, { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from "qs"
// import { message } from '@/utils/message';
import router from '@/router';

interface ResponseData {
  status: number;
  data: any;
  statusInfo: string;
}
// 创建axios实例
export const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-requested-with': 'XMLHttpRequest'
  },
  withCredentials: true,
  transformRequest: [(data) => {
    if (Object.prototype.toString.call(data) != '[object FormData]') {
      return qs.stringify(data)
    }
    return data
  }],
})

interface PendingType {
  url?: string;
  method?: string; // Method
  params: any;
  data: any;
  cancel: any;
}
// 取消重复请求
const pending: Array<PendingType> = [];
// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key;
    const list: PendingType = pending[key];
    if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
      // 执行取消操作
      list.cancel('操作太频繁，请稍后再试');
      pending.splice(item, 1);
    }
  }
};
// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    removePending(config);
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    removePending(response.config);
    const res = response.data as ResponseData
    if (res.resultCode !== 200) {
      console.log(res.resultCode, 9999999)
      if (res.status === 413) {
        router.push({
          name: 'login'
        })
        return
      }
      // message(res.statusInfo, 'error')
      return Promise.reject({ status: res.resultCode, data: res.data, statusInfo: res.msg || '请求错误' })
      // return { status: res.status, data: res.data, statusInfo: res.statusInfo || '请求错误' }
    } else {
      return res.data || {}
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)
