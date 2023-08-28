import axios from 'axios';
const instance = axios.create({
  baseURL: '/api', // 设置你的baseURL
  timeout: 30000, // 请求超时时间
});

// 请求拦截
instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default instance;


