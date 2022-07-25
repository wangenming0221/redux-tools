import axios from "axios";
import Qs from 'qs';
// import { decrypt, encrypt } from "../utils/encrypt";

const axiosOption = {
    baseURL:'',
    timeout:5000,
    // transformRequest:[function(data){
    //     return Qs.stringify(data) //将传参类型改为formData
    // }],
};

// 创建一个单例
const instance = axios.create(axiosOption);

// 添加请求拦截
instance.interceptors.request.use(function (config) {
    const token = '';
    if (token) {
        config.headers[ 'Authorization' ] = token // 让每个请求携带token
    }
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
        config.data = Qs.stringify(config.data) //将对象序列化成URL的形式，以&进行拼接
    }
    // config.data = encrypt(config.data); //对参数进行加密操作
    return config;
}, function(error) {
    // 请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截
instance.interceptors.response.use(function (response) {
    // 对响应数据做些什么
    return response.data;
}, function(error) {
    return Promise.reject(error);
});

export default instance
