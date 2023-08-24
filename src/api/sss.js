import axios from 'axios';

// 创建一个 Axios 实例
const service = axios.create({
  baseURL: 'http://192.168.88.70:8000', // 设置接口的基础URL
  timeout: 5000, // 设置请求超时时间
});

// 请求拦截器，在发送请求之前做一些处理
service.interceptors.request.use((config) => {
  // 在这里可以添加请求头信息等操作
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截器，处理返回的数据
service.interceptors.response.use((response) => {
  // 在这里可以根据响应数据做一些统一处理
  return response.data;
}, (error) => {
  return Promise.reject(error);
});
Vue.prototype.$http = service

export default service;
