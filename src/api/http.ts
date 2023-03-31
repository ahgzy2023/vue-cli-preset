import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from 'axios'
  import showCodeMessage from '@/api/code'
  import { formatJsonToUrlParams, getSessionStorage, instanceObject } from '@/utils'
  import { message } from 'ant-design-vue';
  import { ContentTypeEnum } from '@/enums/httpEnums'
  
  const BASE_PREFIX = process.env.PRESET_APP_API_BASE_URL

  // 创建实例
  const axiosInstance: AxiosInstance = axios.create({
    // 前缀
    baseURL: BASE_PREFIX,
    // 超时
    timeout: 1000 * 30,
    // 请求头
    headers: {
      'Content-Type': ContentTypeEnum.JSON,
    },
  })
  
  // 请求拦截器
  axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig): any => {
      // TODO 在这里可以加上想要在请求发送前处理的逻辑
      // TODO 比如 loading 等
      // if(getSessionStorage('token'))

      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    },
  )
  
  // 响应拦截器
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data
      }
      message.info(JSON.stringify(response.status))
      return response
    },
    (error: AxiosError) => {
      const { response } = error
      if (response) {
        message.error(showCodeMessage(response.status))
        return Promise.reject(response.data)
      }
      message.warning('网络连接异常,请稍后再试!')
      return Promise.reject(error)
    },
  )


  const service = {
    get<T = any> (url: string, data?: object): Promise<T> {
      return axiosInstance.get(url, { params: data })
    },
  
    post<T = any> (
      url: string,
      mock: boolean,
      data?: object,
      headers?: ContentTypeEnum,
    ) {
      if(mock) {
        return new Promise((resolve) => {
          setTimeout(()=> {
            resolve(1)
          },1500)
        })
      }
      return axiosInstance.post(url, data, {
        headers: {
          'Content-Type': headers || ContentTypeEnum.JSON,
        },
      })
    },
  
    put<T = any> (
      url: string,
      data?: object,
      headers?: ContentTypeEnum,
    ): Promise<T> {
      return axiosInstance.put(url, data, {
        headers: {
          'Content-Type': headers || ContentTypeEnum.JSON,
        },
      })
    },
  
    delete<T = any> (url: string, data?: object): Promise<T> {
      return axiosInstance.delete(url, data)
    },
  
    upload: (url: string, file: FormData | File) =>
      axiosInstance.post(url, file, {
        headers: { 'Content-Type': ContentTypeEnum.FORM_DATA },
      }),
    download: (url: string, data: instanceObject) => {
      window.location.href = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(
        data,
      )}`
    },
  }
  
  export default service
  